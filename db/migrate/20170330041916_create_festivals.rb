class CreateFestivals < ActiveRecord::Migration
  def change
    create_table :festivals do |t|
      t.string  :title
      t.string  :description
      t.date    :event_date
      t.float   :price
      t.boolean :state
      t.integer :location_id 	
      t.timestamps null: false
    end
  end
end
