source 'https://rubygems.org'

require 'json'
require 'open-uri'
versions = JSON.parse(open('https://pages.github.com/versions.json').read)

gem 'github-pages', versions['github-pages']

gem 'jekyll', '2.5.3'
gem 'jekyll-sitemap'
gem 'octopress', '~> 3.0'
