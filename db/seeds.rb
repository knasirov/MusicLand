# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user = User.new(email: 'DemoUser@MusicLand', username: "Demo User", password: 'randompassword', location: 'San Francisco')
user.image = open('https://s3.amazonaws.com/music-land-seed/users/demo.jpeg')
user.save!

user = User.new(email: '2Pac@MusicLand', username: "2Pac", password: '3334142', location: 'New York')
user.image = open('https://s3.amazonaws.com/music-land-seed/users/2pac.jpeg')
user.save!

user = User.new(email: 'Dido@MusicLand', username: "Dido", password: '3334142', location: 'London')
user.image = open('https://s3.amazonaws.com/music-land-seed/users/dido.jpeg')
user.save!

user = User.new(email: 'Eminem@MusicLand', username: "Eminem", password: '3334142', location: 'Detroit')
user.image = open('https://s3.amazonaws.com/music-land-seed/users/eminem.png')
user.save!

user = User.new(email: 'Moby@MusicLand', username: "Moby", password: '3334142', location: 'New York')
user.image = open('https://s3.amazonaws.com/music-land-seed/users/moby.jpeg')
user.save!

user = User.new(email: 'Beyonce@MusicLand', username: "Beyonce", password: '3334142', location: 'Los Angeles')
user.image = open('https://s3.amazonaws.com/music-land-seed/users/beyonce.jpeg')
user.save!

user = User.new(email: 'ChainSmokers@MusicLand', username: "ChainSmokers", password: '3334142', location: 'New York')
user.image = open('https://s3.amazonaws.com/music-land-seed/users/chainsmokers.jpeg')
user.save!

user = User.new(email: 'DaftPunk@MusicLand', username: "Daft Punk", password: '3334142', location: 'Paris, France')
user.image = open('https://s3.amazonaws.com/music-land-seed/users/daftpunk.jpeg')
user.save!

user = User.new(email: 'LykkeLi@MusicLand', username: "Lykke Li", password: '3334142', location: 'Sweden')
user.image = open('https://s3.amazonaws.com/music-land-seed/users/lykkeli.jpeg')
user.save!

user = User.new(email: 'Rihanna@MusicLand', username: "Rihanna", password: '3334142', location: 'Saint Michael, Barbados')
user.image = open('https://s3.amazonaws.com/music-land-seed/users/rihanna.jpeg')
user.save!

user = User.new(email: 'Sia@MusicLand', username: "Sia", password: '3334142', location: 'Adelaide, Australia')
user.image = open('https://s3.amazonaws.com/music-land-seed/users/sia.jpeg')
user.save!

track = Track.new(title: 'I feel it coming', description: 'Song by The Weeknd featuring Daft Punk', user_id: 1)
track.image = open('https://s3.amazonaws.com/music-land-seed/tracks/ifeelitcoming.png')
track.file = open('https://s3.amazonaws.com/music-land-seed/tracks/ifeelitcoming.mp3')
track.save!

track = Track.new(title: 'Extreme Ways', description: 'You may remember this song from Bourne trilogy.', user_id: 5)
track.image = open('https://s3.amazonaws.com/music-land-seed/tracks/extremeways.jpeg')
track.file = open('https://s3.amazonaws.com/music-land-seed/tracks/extremeways.mp3')
track.save!

track = Track.new(title: 'Formation', description: 'From Lemonade album', user_id: 6)
track.image = open('https://s3.amazonaws.com/music-land-seed/tracks/formation.png')
track.file = open('https://s3.amazonaws.com/music-land-seed/tracks/formation.mp3')
track.save!

track = Track.new(title: 'White Flag', description: 'The song that made Dido famous', user_id: 3)
track.image = open('https://s3.amazonaws.com/music-land-seed/tracks/whiteflag.jpeg')
track.file = open('https://s3.amazonaws.com/music-land-seed/tracks/whiteflag.mp3')
track.save!

track = Track.new(title: 'Umbrella', description: 'featuring Jay-Z', user_id: 10)
track.image = open('https://s3.amazonaws.com/music-land-seed/tracks/umbrella.png')
track.file = open('https://s3.amazonaws.com/music-land-seed/tracks/umbrella.mp3')
track.save!

track = Track.new(title: 'Mockingbird', description: "Eminem's life story", user_id: 4)
track.image = open('https://s3.amazonaws.com/music-land-seed/tracks/mockingbird.jpeg')
track.file = open('https://s3.amazonaws.com/music-land-seed/tracks/mockingbird.mp3')
track.save!

track = Track.new(title: 'Instant Crush', description: 'featuring Julian Casablanca', user_id: 8)
track.image = open('https://s3.amazonaws.com/music-land-seed/tracks/instantcrush.jpeg')
track.file = open('https://s3.amazonaws.com/music-land-seed/tracks/instantcrush.mp3')
track.save!

track = Track.new(title: 'Closer', description: 'featuring Halsey', user_id: 7)
track.image = open('https://s3.amazonaws.com/music-land-seed/tracks/closer.jpeg')
track.file = open('https://s3.amazonaws.com/music-land-seed/tracks/closer.mp3')
track.save!

track = Track.new(title: 'Dear Mama', description: 'Dedicated to all mothers', user_id: 2)
track.image = open('https://s3.amazonaws.com/music-land-seed/tracks/dearmama.jpeg')
track.file = open('https://s3.amazonaws.com/music-land-seed/tracks/dearmama.mp3')
track.save!

track = Track.new(title: 'Stan', description: 'featuring Dido', user_id: 4)
track.image = open('https://s3.amazonaws.com/music-land-seed/tracks/stan.png')
track.file = open('https://s3.amazonaws.com/music-land-seed/tracks/stan.mp3')
track.save!

track = Track.new(title: 'I Follow Rivers', description: '', user_id: 9)
track.image = open('https://s3.amazonaws.com/music-land-seed/tracks/ifollowrivers.jpeg')
track.file = open('https://s3.amazonaws.com/music-land-seed/tracks/ifollowrivers.mp3')
track.save!

track = Track.new(title: 'Drunk in Love', description: 'featuring Jay-Z', user_id: 6)
track.image = open('https://s3.amazonaws.com/music-land-seed/tracks/drunkinlove.jpeg')
track.file = open('https://s3.amazonaws.com/music-land-seed/tracks/drunkinlove.mp3')
track.save!

track = Track.new(title: 'Breathe Me', description: "Sia's first hit", user_id: 11)
track.image = open('https://s3.amazonaws.com/music-land-seed/tracks/breathme.jpeg')
track.file = open('https://s3.amazonaws.com/music-land-seed/tracks/breathme.mp3')
track.save!

track = Track.new(title: 'Halo', description: '', user_id: 6)
track.image = open('https://s3.amazonaws.com/music-land-seed/tracks/halo.jpeg')
track.file = open('https://s3.amazonaws.com/music-land-seed/tracks/halo.mp3')
track.save!

track = Track.new(title: 'Cheap Thrills', description: '', user_id: 11)
track.image = open('https://s3.amazonaws.com/music-land-seed/tracks/cheapthrills.jpeg')
track.file = open('https://s3.amazonaws.com/music-land-seed/tracks/cheapthrills.mp3')
track.save!

track = Track.new(title: 'Rap God', description: 'Why be a king, when you can be a god!', user_id: 4)
track.image = open('https://s3.amazonaws.com/music-land-seed/tracks/rapgod.png')
track.file = open('https://s3.amazonaws.com/music-land-seed/tracks/rapgod.mp3')
track.save!

track = Track.new(title: 'California Love', description: '', user_id: 2)
track.image = open('https://s3.amazonaws.com/music-land-seed/tracks/california.jpeg')
track.file = open('https://s3.amazonaws.com/music-land-seed/tracks/california.mp3')
track.save!

track = Track.new(title: 'Elastic Heart', description: '', user_id: 11)
track.image = open('https://s3.amazonaws.com/music-land-seed/tracks/elasticheart.jpeg')
track.file = open('https://s3.amazonaws.com/music-land-seed/tracks/elasticheart.mp3')
track.save!

track = Track.new(title: 'Lose Yourself to Dance', description: 'featuring Pharrell Williams and Nile Rogers', user_id: 8)
track.image = open('https://s3.amazonaws.com/music-land-seed/tracks/loseyourselftodance.png')
track.file = open('https://s3.amazonaws.com/music-land-seed/tracks/loseyourselftodance.mp3')
track.save!

track = Track.new(title: 'Love on the Brain', description: '', user_id: 10)
track.image = open('https://s3.amazonaws.com/music-land-seed/tracks/loveonthebrain.png')
track.file = open('https://s3.amazonaws.com/music-land-seed/tracks/loveonthebrain.mp3')
track.save!

Comment.create(body: "Enjoy the song, people!", track_id: 1, user_id: 1)
Comment.create(body: "I feel it", track_id: 1, user_id: 4)
Comment.create(body: "Great collaboration", track_id: 1, user_id: 7)
Comment.create(body: "I love it!", track_id: 1, user_id: 2)
Comment.create(body: "Daft Punk at it again", track_id: 1, user_id: 4)
Comment.create(body: "Such a phenomenal song", track_id: 2, user_id: 4)
Comment.create(body: "BOURNE!!!!", track_id: 2, user_id: 1)
Comment.create(body: "I love you Moby!", track_id: 2, user_id: 6)
Comment.create(body: "BEYONCEEEEEEE!!!!!!!!!!!!", track_id: 3, user_id: 1)
Comment.create(body: "Ladies, get in formation!", track_id: 3, user_id: 9)
Comment.create(body: "Slay", track_id: 3, user_id: 10)
Comment.create(body: "Eminem is the man", track_id: 6, user_id: 2)
Comment.create(body: "This song is so sad :(", track_id: 6, user_id: 1)
Comment.create(body: "I love it", track_id: 4, user_id: 1)
Comment.create(body: "Great song", track_id: 4, user_id: 3)
Comment.create(body: "First!", track_id: 7, user_id: 7)
Comment.create(body: "I spent my whole summer listening to this", track_id: 8, user_id: 1)
Comment.create(body: "Me too!", track_id: 8, user_id: 2)
Comment.create(body: "It's a perfect summer song", track_id: 8, user_id: 9)
Comment.create(body: "Yep", track_id: 8, user_id: 8)
Comment.create(body: "thanks ToPac", track_id: 9, user_id: 3)
Comment.create(body: "My idol", track_id: 9, user_id: 4)
Comment.create(body: "Dido makes this song so much better", track_id: 10, user_id: 11)
Comment.create(body: "Hidden gem", track_id: 11, user_id: 1)
Comment.create(body: "Never heard this before", track_id: 11, user_id: 3)
Comment.create(body: "OMG. this is so great!", track_id: 11, user_id: 10)
Comment.create(body: "Swedish pride!", track_id: 11, user_id: 8)
Comment.create(body: "Represent", track_id: 11, user_id: 1)
Comment.create(body: "Queen B!", track_id: 12, user_id: 1)
Comment.create(body: "Awesome", track_id: 12, user_id: 10)
Comment.create(body: "Such a happy song", track_id: 15, user_id: 9)
Comment.create(body: "this is my goto when i'm sad", track_id: 15, user_id: 3)
Comment.create(body: "I love this", track_id: 15, user_id: 4)
Comment.create(body: "awesome...", track_id: 15, user_id: 5)
Comment.create(body: "I'm lost", track_id: 19, user_id: 1)
Comment.create(body: "i love the rythm", track_id: 19, user_id: 9)
Comment.create(body: "perfect", track_id: 19, user_id: 3)
Comment.create(body: "what a great song", track_id: 19, user_id: 4)
Comment.create(body: "daft punk and pharrell. can you ask for more?", track_id: 19, user_id: 4)
Comment.create(body: "This is for my fans", track_id: 20, user_id: 10)
