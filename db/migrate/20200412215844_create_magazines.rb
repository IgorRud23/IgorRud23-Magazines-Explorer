class CreateMagazines < ActiveRecord::Migration[6.0]
  def change
    create_table :magazines do |t|
      t.string :name
      t.string :image_src
      t.string :discription
      t.integer :release_date

      t.timestamps
    end
  end
end
