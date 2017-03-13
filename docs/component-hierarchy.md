## Component Hierarchy

**AuthFormContainer**
 - AuthForm

**HomeContainer**
 - NavBarContainer
  + LeftNavBar
  + RightNavBar
 - PlayerContainer
  + ControlButtons
  + ProgressBar
  + Trackinfo

**TracksIndexContainer**
 - TracksIndex
  * TracksIndexItem

**UploadFormContainer**
 - UploadForm

**UserHomeContainer**
 - UserItem
 - TracksIndex
  * TracksIndexItem

**TrackHomeContainer**
 - TrackItem
 - CommentForm
 - CommentIndex
  - CommentIndexItem


## Routes

|Path                | Component              |
|--------------------|---------------------   |
| "/"                | "HomeContainer"        |
| "/sign-up"         | "AuthFormContainer"    |
| "/sign-in"         | "AuthFormContainer"    |
| "/stream"          | "TracksIndexContainer" |
| "/tracks/:trackId" | "TrackHomeContainer"   |
| "/users/:userId"   | "UserHomeContainer"    |
| "/upload"          | "UploadFormContainer"  |
