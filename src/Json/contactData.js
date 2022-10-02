const ContactData = {
    "Checkboxes": [
        {
            "name": "Name",
            "label": "Name *",
            "placeholder": "What is your name?"
        },
        {
            "name": "Email",
            "label": "Email Address *",
            "placeholder": "What is your email address?"
        }
    ],
    "Radiobuttons": [
        {
            "name": "Service",
            "label": "Service",
            "DefaultChecked": "What are you interested in?",
            "RadioOptions": [
                {
                    "optionName": "Need help with a one-off project"
                },
                {
                    "optionName": "Looking for a long term partnership"
                },
                {
                    "optionName": "Want to hire me full-time"
                },
                {
                    "optionName": "Other"
                }
            ]
        },
        {
            "name": "Budget",
            "label": "Budget",
            "DefaultChecked": "What's your budget?",
            "RadioOptions": [
                {
                    "optionName": "$0-$1000"
                },
                {
                    "optionName": "$1000 - $2500"
                },
                {
                    "optionName": "$2500 - $5000"
                },
                {
                    "optionName": "$5000 - $10000"
                },
                {
                    "optionName": "$10000 or more"
                }
            ]
        }
    ]
}

export default ContactData;