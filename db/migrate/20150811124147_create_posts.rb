class CreatePosts < ActiveRecord::Migration
  def change
    create_table :posts do |t|
      t.string :title
      t.string :url
      t.timestamps null: false
    end

    add_reference :posts, :user, index: true    
  end
end
