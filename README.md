
# Move Post Links After Topic Metadata

A small Discourse theme component that repositions the post’s
`<div class="post-links-container">` so it appears directly after
`<div class="topic-meta-data">` inside each post.

In the example below we see that the links to the following topics have been repositioned to the top of the Topic, rather than their normal position which is at the end of the Topic.

 - Big Backlog
 - Small Backlog
 - How to Create a Test Release for Android

<img width="776" height="377" alt="Selection_082" src="https://github.com/user-attachments/assets/e33fef17-a549-439a-8b9f-e94b0b4c114d" />



## Installation

In Discourse admin:

**Admin → Customize → Themes → Install → From GitHub**

Paste the repo URL and enable the component.

## File Structure

```
about.json
javascripts/discourse/api-initializers/move-post-links.js
```


