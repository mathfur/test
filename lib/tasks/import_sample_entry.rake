# -*- encoding: utf-8 -*-

desc "テキストファイルをentryにインポートする"
task :import_from_text => :environment do
  entry_contents = YAML.load_file("import_data/aozora_to_entries.yaml")

  ActiveRecord::Base.transaction do
    user = User.where(:name => "sample").first || User.create(:name => "sample", :age => 30)
    blog = Blog.where(:name => "sample", :user_id => user.id).first || Blog.create(:name => "sample", :user_id => user.id)

    (1..10).to_a.each do |i|
      entry_contents.each do |title_and_contents|
        blog.entries.create(
          :title => "#{title_and_contents["title"]}(#{i})",
          :contents => "#{title_and_contents["contents"]}(#{i})"
        )
      end
    end
  end
end
