
# Move Post Links After Topic Metadata

A small Discourse theme component that repositions the post’s
`<div class="post-links-container">` so it appears directly after
`<div class="topic-meta-data">` inside each post.

## Example
### Before
Without this theme compnent, links at the bottom of the Topic:
<img width="795" height="352" alt="image" src="https://github.com/user-attachments/assets/4bb2c10d-902a-4e89-ad32-925073de85bc" />


### After
With this Theme Component, links are at the top of the Topic

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


