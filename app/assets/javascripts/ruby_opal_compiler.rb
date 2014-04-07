class RubyOpalCompiler
  def self.instance
    @instance ||= self.new
  end

  def initialize
    @output = []
    @compiled_lines = []
  end

  def run_code
    @output =[]

    begin
      code = Opal.compile(`window.editor.getValue()`)
      eval_code code
      @output
    rescue => err
      log_error err
    end
  end

  def each_line
    line_count.times do |n|
      compile(`window.getLine(#{n-1})`)
    end
  end

  def line_count
    `window.editor.getLineCount()`
  end

  def compile(str)
    Opal.compile(str)
  end

  def eval_code(js_code)
    `eval(js_code)`
  end

  def log_error(err)
    print_to_output "#{err}\n#{`err.stack`}"
  end

  def print_to_output(str)
    @output << str
  end

end

Document.ready? do
  def $stdout.puts(*strs)
    strs.each { |str| RubyOpalCompiler.instance.print_to_output str }
  end
end