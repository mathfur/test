class CreateEntries < ActiveRecord::Migration
  def change
    create_table :entries do |t|
      t.references :blog
      t.string :title
      t.text :contents

      t.timestamps
    end
    add_index :entries, :blog_id
  end
end
