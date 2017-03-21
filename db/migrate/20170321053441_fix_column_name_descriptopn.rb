class FixColumnNameDescriptopn < ActiveRecord::Migration[5.0]
  def change
    rename_column :tracks, :desciprtion, :description
  end
end
