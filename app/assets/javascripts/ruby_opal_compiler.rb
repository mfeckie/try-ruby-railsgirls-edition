class Outputter
  def results
    @results ||= []
  end

  def puts(str)
    results << str.inspect
  end
end

class RubyOpalCompiler
  def self.instance
    @instance ||= self.new
  end

  def output
    @output
  end

  def initialize()
    @output = []
    @compiled_lines = []
  end

  def run_code(input_code)
    begin
      code = Opal.compile(input_code)
      new_stdout = Outputter.new
      old_stdout, $stdout = $stdout, new_stdout
      eval_code code
      @output = $stdout.results
      $stdout = old_stdout
    rescue => err
      log_error err
    end
  end

  def compile(str)
    Opal.compile(str)
  end

  def eval_code(js_code)
    `eval(js_code)`
  end

  def log_error(err)
    @output = ["#{err}\n#{`err.stack`}"]
  end

end