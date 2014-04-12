# A sample Guardfile
# More info at https://github.com/guard/guard#readme

guard :rspec, cmd: 'spring rspec' do
  watch(%r{^spec/.+_spec\.rb$})
  watch(%r{^lib/(.+)\.rb$})     { |m| "spec/lib/#{m[1]}_spec.rb" }
  watch('spec/spec_helper.rb')  { "spec" }

  # Rails example
  watch(%r{^app/(.+)\.rb$})                           { |m| "spec/#{m[1]}_spec.rb" }
  watch(%r{^app/(.*)(\.erb|\.haml|\.slim)$})          { |m| "spec/#{m[1]}#{m[2]}_spec.rb" }
  watch(%r{^app/controllers/(.+)_(controller)\.rb$})  { |m| ["spec/routing/#{m[1]}_routing_spec.rb", "spec/#{m[2]}s/#{m[1]}_#{m[2]}_spec.rb", "spec/acceptance/#{m[1]}_spec.rb"] }
  watch(%r{^spec/support/(.+)\.rb$})                  { "spec" }
  watch('config/routes.rb')                           { "spec/routing" }
  watch('app/controllers/application_controller.rb')  { "spec/controllers" }

  # Capybara features specs
  watch(%r{^app/views/(.+)/.*\.(erb|haml|slim)$})     { |m| "spec/features/#{m[1]}_spec.rb" }
end


guard :teaspoon, cmd: 'spring teaspoon' do
  # Implementation files
  watch(%r{app/assets/javascripts/(.+).js}) { |m| "#{m[1]}_spec" }
  watch(%r{app/assets/javascripts/router.js}) { "spec/javascripts/routes"}
  watch(%r{app/assets/javascripts/templates/(.+).hbs}) { |m|  "spec/javascripts/integration/#{m[1]}_spec"}

  # Specs / Helpers
  watch(%r{spec/javascripts/(.*)})
end
