Given /^I visit the homepage$/ do
  visit "/Index"
end

Then /^I should see "([^"]*)"$/ do |phrase|
  page.text.should =~ /#{phrase}/
end

Then /^I should see a "(.*?)" message$/ do |msg|
  page.text.should =~ /#{msg}/
end

Then /^I should see the field "([^"]*)"$/ do |phrase|
  find('#'+phrase)
end

Then /^I should see the site title$/ do
  find('h1#siteTitle')
end

And /^The site title should be correct$/ do
  find('h1#siteTitle').text.should == "A Node JS MVC Application"
end

Then /^I should see the site footer/ do
  find('h5#siteFooter')
end

And /^The site footer content should be correct$/ do
  find('h1#siteTitle').text.should == "A Node JS MVC Application"
end