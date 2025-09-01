I want you to create a new prd file for $ARGUMENTS in .claude/prds. Give it an appropriate name based on the content.

Keep it simple but include everything a developer would need to implement it. Double check every line of code and make sure it fits into the existing infrastructure. Think hard about it. Look at practices we do already in terms of components and ensure it reuses components we use already.

Abide by all rules in CLAUDE.md.

Don't include anything about "Implementation Steps" or "benefits".

Start with the rational into why this PRD is needed. If there is an existing way have a heading "Existing way" and then "New way" and compare the two.

Under the rationale, include a bunch of user stories like this:

```
## User stories

### User story 1

As a logged-in hub member, I want to register for webinars without being asked for my email address, so that I can complete registration faster with fewer steps.

#### Acceptance Criteria

1. WHEN a logged-in user clicks "Register to attend" on a webinar with `attendeeRegistrationMethod = "hub_member"` THEN the system SHALL skip the email entry step
2. WHEN the registration modal opens for a logged-in user THEN the system SHALL immediately check their registration status
3. WHEN checking registration status THEN the system SHALL display a loading indicator with "Checking registration status..." message
4. IF the user is already registered THEN the system SHALL show the completion step immediately
5. IF the user is not registered AND has all required fields THEN the system SHALL auto-register them and show completion step
6. IF the user is not registered AND is missing required fields THEN the system SHALL show the registration form with only missing fields
```

Underneath that put the implementation.
