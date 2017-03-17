class CreateTracks < ActiveRecord::Migration[5.0]
  def change
    create_table :tracks do |t|
      t.string :title, null: false
      t.text :desciprtion
      t.integer :user_id, null: false
      t.timestamps
    end

    add_index :tracks, :user_id
  end
end
