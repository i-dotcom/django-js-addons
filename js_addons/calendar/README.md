Author: Adam Cupiał
www: webdesign-log.pl

# Calendar widget

## DESCRIPTION
 js calendar form widget, based on Dynarch Calendar 1.8

## INSTALLATION

 * copy 'calendar' directory from 'calendar/media' to your media directory
 * in your template head section add form media:
   if you passed form class as 'form' to template:
   {{{

   <head>

    {{ form.media }}

   </head>
   }}}

   or
   {{{

   {{ form.media.css }}
   {{ form.media.js }}

   }}}

## USAGE

in your form just add widget to appropriate field:

    from js_addons.calendar.widgets import CalendarWidget

        MyForm(forms.Form):
        ...

        birthday = forms.DateField(
            label=u'Birthday',
            help_text=u'(YYYY-MM-DD)',
            widget=CalendarWidget(
                    date_format='%Y-%m-%d',
                    title_format='%b %Y'
                    )
            )

        ...


## TODO
 * pass min date, max date
 * full language support
