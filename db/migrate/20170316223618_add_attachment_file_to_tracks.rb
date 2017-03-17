class AddAttachmentFileToTracks < ActiveRecord::Migration
  def self.up
    change_table :tracks do |t|
      t.attachment :file
    end
  end

  def self.down
    remove_attachment :tracks, :file
  end
end
