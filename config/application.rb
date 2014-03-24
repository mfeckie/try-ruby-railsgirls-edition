require File.expand_path('../boot', __FILE__)

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(:default, Rails.env)

module TryRubyRailsgirls
  class Application < Rails::Application
    config.generators do |g|
      g.test_framework :rspec, fixtures: true, view_specs: false, helper_specs: false, controller_specs: false, routing_specs: false
      g.factory_girl true
    end
  end
end
