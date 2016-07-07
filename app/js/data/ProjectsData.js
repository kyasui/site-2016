'use strict';

const ProjectsData = {

  projects: [
    {
      'project-slug': 'google-primer',
      'project-title': 'Google Primer',
      'project-role': 'Tech Lead / Developer',
      'project-description': 'Google\'s Primer app teaches marketing skills in five minute micro lessons.',
      'image': '/images/primer-hero.png',
      'description': [
        'Development for the Google Primer team over two distinct phases: MVP and Full Product.',
        'For The MVP phase, I was the lone developer. Working closely with Designers and the Product Manager, I built the Cordova based app from the ground up.',
        'For the Full Product phase, I served as Tech Lead, designing the Server integration and building the API.',
        'In addition to the app, I also built the product website.'
      ],
      'role': 'Tech Lead / Developer',
      'year': '2014 - 2016',
      'credits': [
        {
          'credit': 'Google Primer Team'
        }
      ],
      'tech': [
        'Python',
        'AppEngine',
        'NDB',
        'HTML',
        'CSS',
        'JS'
      ],
      'links': [
        {
          'linkText': 'Website',
          'linkItself': 'https://www.yourprimer.com/'
        },
        {
          'linkText': 'iTunes',
          'linkItself': 'https://itunes.apple.com/us/app/primer-marketing-lessons-from/id918628107?mt=8'
        },
        {
          'linkText': 'Google Play',
          'linkItself': 'https://play.google.com/store/apps/details?id=com.google.android.apps.primer&hl=en'
        },
        {
          'linkText': 'Product Hunt',
          'linkItself': 'https://www.producthunt.com/tech/primer-2-0-by-google'
        }
      ]
    },
    {
      'project-slug': 'john-heart-jackie',
      'project-title': 'John Heart Jackie',
      'project-role': 'Developer',
      'project-description': 'John Heart Jackie is a Folk/Rock duo based in NYC and Portland, OR.',
      'image': '/images/jhj-hero.png',
      'description': [
        'Development for JHJ - Episodes - a visualization/companion app to JHJ\'s latest LP.'
      ],
      'role': 'Developer',
      'year': '2016',
      'credits': [
        {
          'credit': 'Dylan Ousley',
          'linkItself': 'http://dylanousley.com/'
        }
      ],
      'tech': [
        'React JS',
        'HTML',
        'SASS'
      ],
      'links': [
        {
          'linkText': 'Website',
          'linkItself': 'http://www.johnheartjackie.com/'
        }
      ]
    },
    {
      'project-slug': 'xian-foods',
      'project-title': 'Xi\’an Famous Foods',
      'project-role': 'Designer / Developer',
      'project-description': 'Xi\’an Famous Foods is a NYC based Chinese restaurant chain.',
      'image': '/images/xian-hero.png',
      'description': [
        'Website development for Xi’an Foods. The client needed a more scaleable and unified web experience to represent their quickly expanding restaurant chain.',
        'Built with Wordpress as CMS, and designed to scale as the brand grows.'
      ],
      'role': 'Designer / Developer',
      'year': '2014',
      'credits': [
        {
          'credit': 'Nina Hazen',
          'linkItself': 'http://ninahazen.com/'
        }
      ],
      'tech': [
        'HTML',
        'LESS',
        'Javascript',
        'Wordpress',
        'PHP'
      ],
      'links': [
        {
          'linkText': 'Website',
          'linkItself': 'http://xianfoods.com/'
        }
      ]
    },
    {
      'project-slug': 'dejargonizer',
      'project-title': 'The Dejargonizer',
      'project-role': 'Designer / Developer',
      'project-description': 'The Dejargonizer chrome extension is a tool to rid the web of marketing jargon.',
      'image': '/images/dejargonizer-hero.png',
      'description': [
        'Chrome extension development for the Google Learn10x team. The Dejargonizer is designed to keep the web browsing experience marketing-speak-free.'
      ],
      'role': 'Designer / Developer',
      'year': '2014',
      'credits': [
        {
          'credit': 'Google Learn10x'
        }
      ],
      'tech': [
        'HTML',
        'CSS',
        'Javascript'
      ],
      'links': [
        {
          'linkText': 'Website',
          'linkItself': 'http://www.thedejargonizer.com/'
        },
        {
          'linkText': 'Extension',
          'linkItself': 'https://chrome.google.com/webstore/detail/the-dejargonizer/iploicjoaegmhjadiaphdeihommheeco?hl=en'
        }
      ]
    },
    {
      'project-slug': 'stylyt',
      'project-title': 'Stylyt',
      'project-role': 'Developer',
      'project-description': 'Stylyt was a NYC startup which allowed users to design for their favorite fashion brands.',
      'image': '/images/stylyt-hero.jpg',
      'description': [
        'Development for Stylyt\'s brand homepage.'
      ],
      'role': 'Developer',
      'year': '2013',
      'credits': [
        {
          'credit': 'Sylyt'
        }
      ],
      'tech': [
        'HTML',
        'LESS',
        'Javascript'
      ]
    },
    {
      'project-slug': 'red-peak',
      'project-title': 'Red Peak Media',
      'project-role': 'Developer',
      'project-description': 'Red Peak Media is a global Strategic Engagement agency.',
      'image': '/images/rpmc-hero.png',
      'description': [
        'Development for Red Peak Media Company\'s refreshed website.',
        'Working closely with designers, I implemented a fully responsive, unique diamond based layout.'
      ],
      'role': 'Developer',
      'year': '2013',
      'credits': [
        {
          'credit': 'Layerframe',
          'linkItself': 'http://layerframe.com/'
        }
      ],
      'tech': [
        'HTML',
        'LESS',
        'Javascript',
        'Wordpress',
        'PHP'
      ],
      'links': [
        {
          'linkText': 'Website',
          'linkItself': 'http://www.rpmc.com/'
        }
      ]
    },
    {
      'project-slug': 'red-peak-youth',
      'project-title': 'Red Peak Youth',
      'project-role': 'Developer',
      'project-description': 'Red Peak Youth is a branding and design agency focused solely on the youth consumer.',
      'image': '/images/rpy-hero.png',
      'description': [
        'Website development for Red Peak Youth. Website consists of fully custom Wordpress theme and CMS integration.'
      ],
      'role': 'Developer',
      'year': '2013',
      'credits': [
        {
          'credit': 'Layerframe',
          'linkItself': 'http://layerframe.com/'
        }
      ],
      'tech': [
        'HTML',
        'LESS',
        'Javascript',
        'Wordpress',
        'PHP'
      ],
      'links': [
        {
          'linkText': 'Website',
          'linkItself': 'http://www.redpeakyouth.com/'
        }
      ]
    }
  ]

};

export default ProjectsData;