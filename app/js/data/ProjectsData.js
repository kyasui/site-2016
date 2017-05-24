'use strict';

const ProjectsData = {

  projects: [
    {
      'project-slug': 'visualizing-100-days',
      'project-title': 'Visualizing 100 Days',
      'project-role': 'Developer',
      'project-description': 'Culture Mapping the way Trump tweets over his first 100 days. A data visualization by scenarioDNA, a consulting firm that specializes in reading cultural change.',
      'image': '/images/100-days-hero.jpg',
      'description': [
        'Development for scenarioDNA\'s "Visualizing 100 Days" data visualization project.'
      ],
      'role': 'Developer',
      'year': '2017',
      'credits': [
        {
          'credit': 'scenarioDNA',
          'linkItself': 'https://www.scenariodna.com/'
        },
        {
          'credit': 'DadJokes',
          'linkItself': 'http://dadjokes.biz/'
        }
      ],
      'tech': [
        'ReactJS',
        'D3',
        'Canvas',
        'Express',
        'MongoDB'
      ],
      'links': [
        {
          'linkText': 'Website',
          'linkItself': 'https://100days.scenariodna.com/'
        }
      ]
    },
    {
      'project-slug': 'free-ex-tenebris',
      'project-title': 'Ex Tenebris',
      'project-role': 'Developer',
      'project-description': 'Ex Tenebris is a Four Song EP by the band FREE.',
      'image': '/images/ex-tenebris.jpg',
      'description': [
        'Design and Development for FREE - Ex Tenebris EP Microsite.'
      ],
      'role': 'Designer / Developer',
      'year': '2017',
      'credits': [
        {
          'credit': 'Triple B Records'
        }
      ],
      'tech': [
        'HTML',
        'CSS',
        'JS'
      ],
      'links': [
        {
          'linkText': 'Website',
          'linkItself': 'https://extenebr.is'
        }
      ]
    },
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
      'project-slug': 'made-in-america',
      'project-title': 'Made In America',
      'project-role': 'Developer',
      'project-description': 'Budweiser Made In America is an annual music fest in Philadelphia, PA.',
      'image': '/images/mia-hero.jpg',
      'description': [
        'Website development for Made In America Fest. Full custom theme and CMS integration.'
      ],
      'role': 'Developer',
      'year': '2016',
      'credits': [
        {
          'credit': 'Layerframe',
          'linkItself': 'http://layerframe.com/'
        }
      ],
      'tech': [
        'SASS',
        'Timber/Twig',
        'Javascript',
        'Wordpress',
        'PHP'
      ],
      'links': [
        {
          'linkText': 'Website',
          'linkItself': 'http://www.madeinamericafest.com/16/'
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
    }
  ]
};

export default ProjectsData;