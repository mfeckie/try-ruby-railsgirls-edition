require 'rspec/core/formatters/base_text_formatter'

class SmallSpaceFormatter < RSpec::Core::Formatters::BaseTextFormatter

  def start(example_count)
    super(example_count)
    blue_line
    output.print bold('Starting Spec Run @ '), success_color(now), ' -> '
  end

  def now
    Time.now.strftime('%H:%M:%S')
  end

  def example_passed(example)
    output.print success_color('✔')
  end

  def example_failed(example)
    failed_examples << example
    output.print failure_color('X')
  end

  def example_pending(example)
    output.print pending_color(example)
  end

  def start_dump
    # binding.pry
  end

  def dump_failures
    return if failed_examples.empty?
    failed_examples.each_with_index do |example, index|
      pending_fixed?(example) ? dump_pending_fixed(example, index) : dump_failure(example, index)
    end
  end

  def dump_failure(example, index)
    output.puts
    dump_failure_info(example)
  end


  def dump_failure_info(example)
    exception = example.execution_result[:exception]
    message = strip_new_lines(exception.message)
    failed_line = strip_new_lines(read_failed_line(exception, example))
    # binding.pry
    output.print "#{success_color failed_line}, #{failure_color message }"
  end

  def strip_new_lines(string)
    string.to_s.gsub("\n", ' ')
  end

  def dump_summary(duration, example_count, failure_count, pending_count)
    dump_profile unless mute_profile_output?(failure_count)
    output.puts
    output.puts "Finished in #{format_duration(duration)}\n"
    output.puts "#{example_count} examples, #{failure_count} failures"
    dump_commands_to_rerun_failed_examples
    blue_line
  end

  def blue_line
    output.puts fixed_color '--------------------------------------'
  end

  def dump_commands_to_rerun_failed_examples
    return if failed_examples.empty?
    output.puts('Failed examples:')
    failed_examples.each do |example|
      output.puts(failure_color("rspec #{RSpec::Core::Metadata::relative_path(example.location)}") + ' ' + detail_color("# #{example.full_description}"))
    end
  end

  def seed(seed)
    nil
  end


  protected

  def read_failed_line(exception, example)
    unless matching_line = find_failed_line(exception.backtrace, example.file_path)
      return 'Unable to find matching line from backtrace'
    end

    file_path, line_number = matching_line.match(/(.+?):(\d+)(|:\d+)/)[1..2]

    if File.exist?(file_path)
      File.readlines(file_path)[line_number.to_i - 1] ||
          "Unable to find matching line in #{file_path}"
    else
      "Unable to find #{file_path} to read failed line"
    end
  rescue SecurityError
    'Unable to read failed line'
  end

  def find_failed_line(backtrace, path)
    path = File.expand_path(path)
    backtrace.detect { |line|
      match = line.match(/(.+?):(\d+)(|:\d+)/)
      match && match[1].downcase == path.downcase
    }
  end

end