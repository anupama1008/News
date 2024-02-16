import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';
export class News extends Component {
  articles=[
    {
        "source": {
            "id": "bbc-news",
            "name": "BBC News"
        },
        "author": "BBC News",
        "title": "Ukraine war: Two French volunteers killed in Russian drone strike - Macron confirms",
        "description": "President Emmanuel Macron condemns as \"cowardly\" Thursday's Russian drone attack in southern Ukraine.",
        "url": "https://www.bbc.co.uk/news/world-europe-68182613",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/848D/production/_132533933_beryslav_kherson.jpg",
        "publishedAt": "2024-02-02T14:37:19.4271649Z",
        "content": "French President Emmanuel Macron has confirmed two French aid workers were killed in a Russian strike in Ukraine, condemning the attack as \"cowardly\".\r\n\"My solidarity goes out to all the volunteers w… [+2211 chars]"
    },
    {
        "source": {
            "id": "bbc-news",
            "name": "BBC News"
        },
        "author": "BBC News",
        "title": "Bao Fan: Missing China billionaire banker resigns from all roles",
        "description": "Bao Fan's disappearance in February last year shocked China's business and investing community.",
        "url": "https://www.bbc.co.uk/news/business-68177941",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/1605B/production/_132530209_06236e896487ddce4757e5b4af0d819739332c85.jpg",
        "publishedAt": "2024-02-02T12:22:12.4114553Z",
        "content": "Chinese billionaire banker Bao Fan, who has been missing for almost a year, has resigned from all roles at his firm, China Renaissance Holdings.\r\nHe stepped down \"for health reasons and to spend more… [+1605 chars]"
    },
    {
        "source": {
            "id": "bbc-news",
            "name": "BBC News"
        },
        "author": "BBC News",
        "title": "Western officials in protest over Israel Gaza policy",
        "description": "More than 800 officials in the US and Europe have penned a letter calling for more pressure on Israel.",
        "url": "https://www.bbc.co.uk/news/world-us-canada-68177357",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/1AEC/production/_132529860_gettyimages-1971228593-1.jpg",
        "publishedAt": "2024-02-02T11:22:17.5676822Z",
        "content": "More than 800 serving officials in the US and Europe have signed a statement warning that their own governments' policies on the Israel-Gaza war could amount to \"grave violations of international law… [+7080 chars]"
    },
    {
        "source": {
            "id": "bbc-news",
            "name": "BBC News"
        },
        "author": "BBC News",
        "title": "Zuckerberg wins on Wall Street after Washington hit",
        "description": "The company's shares surge as it reports a jump in users, ad sales and profits, despite Washington concerns.",
        "url": "https://www.bbc.co.uk/news/business-68175778",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/D1B2/production/_132528635_whatsubject.jpg",
        "publishedAt": "2024-02-02T10:37:14.2545144Z",
        "content": "Mark Zuckerberg's Meta had a bad day in Washington this week. But on Wall Street, it took a victory lap. \r\nThe social media firm updated investors with a slew of good news: quarterly profits that tri… [+3006 chars]"
    },
    {
        "source": {
            "id": "bbc-news",
            "name": "BBC News"
        },
        "author": "BBC News",
        "title": "Why Groundhog Day is actually not American",
        "description": null,
        "url": "https://www.bbc.com/future/article/20240201-groundhog-days-european-creature-parallels-and-the-surprising-3000-year-old-origin-of-an-american-tradition",
        "urlToImage": null,
        "publishedAt": "2024-02-02T09:52:04.3337612Z",
        "content": null
    },
    {
        "source": {
            "id": "bbc-news",
            "name": "BBC News"
        },
        "author": "BBC News",
        "title": "Canadian 'poison killer' Kenneth Law to head straight to trial",
        "description": "Prosecutors have also upgraded charges against him from second-degree to first-degree murder.",
        "url": "https://www.bbc.co.uk/news/world-us-canada-68176391",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/1123B/production/_132530207_kenneth_law.jpg",
        "publishedAt": "2024-02-02T08:07:17.3030408Z",
        "content": "The case of a Canadian man accused of supplying a poisonous chemical to people who died by suicide will head straight to trial, an Ontario court has decided. \r\nProsecutors have also upgraded the char… [+2273 chars]"
    },
    {
        "source": {
            "id": "bbc-news",
            "name": "BBC News"
        },
        "author": "BBC News",
        "title": "Ukraine war: How Russia's war is changing childhood in Ukraine",
        "description": "In Ukraine, six-year-old Nika now attends classes in a subway station to avoid Russian bombardment.",
        "url": "https://www.bbc.co.uk/news/world-europe-68170396",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/C910/production/_132527415_veronikabondarenko.jpg",
        "publishedAt": "2024-02-02T06:37:15.3650831Z",
        "content": "Russia's war has transformed everything in Kharkiv, including childhood.\r\nMissiles are fired on Ukraine's second city from across the Russian border which is so close by that there are only seconds t… [+7301 chars]"
    },
    {
        "source": {
            "id": "bbc-news",
            "name": "BBC News"
        },
        "author": "BBC News",
        "title": "Tesla fjord crash passengers saved by floating sauna users",
        "description": "The users of a sauna boat came to the rescue of two people who crashed into a fjord in Oslo.",
        "url": "https://www.bbc.co.uk/news/world-europe-68177125",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/E8C8/production/_132529595_p0h8l5k7.jpg",
        "publishedAt": "2024-02-02T04:22:12.6302306Z",
        "content": "The users of a sauna boat came to the rescue after a Tesla plunged into a fjord in Norway. \r\nEyewitness videos show the car sinking into the water in Oslo, before nearby sauna goers pull a driver and… [+219 chars]"
    },
    {
        "source": {
            "id": "bbc-news",
            "name": "BBC News"
        },
        "author": "BBC News",
        "title": "Nairobi fire: At least 29 injured in Kenya gas plant explosion",
        "description": "Witnesses described feeling tremors immediately after the blast in south-east Nairobi.",
        "url": "https://www.bbc.co.uk/news/world-africa-68176857",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/102F4/production/_132529266_kenya.png",
        "publishedAt": "2024-02-02T02:07:17.3336962Z",
        "content": "At least 29 people have been injured and many more are feared to be hurt or killed after an explosion at a gas plant in south-east Nairobi, Kenya.\r\nVideo posted on social media show a huge fire ragin… [+1020 chars]"
    },
    {
        "source": {
            "id": "bbc-news",
            "name": "BBC News"
        },
        "author": "BBC News",
        "title": "Michigan school shooter's mother blames her husband in trial testimony",
        "description": "Jennifer Crumbley is the first US parent to face a manslaughter trial for a child's mass shooting.",
        "url": "https://www.bbc.co.uk/news/world-us-canada-68176170",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/8144/production/_132529033_gettyimages-1968506043.jpg",
        "publishedAt": "2024-02-01T23:22:15.145537Z",
        "content": "Media caption, Watch: Jennifer Crumbley emotional as involuntary manslaughter trial begins\r\nA US mother on trial for failing to stop her son from carrying out a deadly school shooting has sought to p… [+3017 chars]"
    }
]
constructor(){
  super();
  this.state={
    articles:[],
    loading:false,
    page:1
  };
}
async updatenews(page){
let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=6fc3be3ece9a496a994d7ae887010031&page=${page}&pageSize=${this.props.items}`;
  this.setState({loading:true})
  let data= await fetch(url);
  document.title=`${this.props.category}-News App`;
  let parsedData=await data.json();
    this.setState({
        page:page,
        articles:parsedData.articles,
        loading:false,
        totalArticle:parsedData.totalResults
    })
}
async componentDidMount(){
    this.updatenews(this.state.page);
}
nextPage = async () => {
    const nextPage = this.state.page + 1;
    if (nextPage <= Math.ceil(this.state.totalArticle / this.props.items)) {
      await this.setState({ page: nextPage });
      this.updatenews(nextPage);
    }
  }
  
  previousPage = async () => {
    const prevPage = this.state.page - 1;
    if (prevPage >= 1) {
      await this.setState({ page: prevPage });
      this.updatenews(prevPage);
    }
  }
  
  render() {
    return (
      <div className='row px-5 py-6'>
      <h2 className='text-center py-3'>Hello - {this.props.category} News.</h2>
       {this.state.loading && <Spinner/>}
              {!this.state.loading && this.state.articles.map((element) => {
              const title = element.title ? element.title.slice(0, 45) : "";
              const description = element.description ? element.description.slice(0, 88) : "";

              return (
              <div className='col-md-4' key={element.url}>
              <Newsitem title={title} description={description} image={element.urlToImage} newsurl={element.url}/>
              </div>
        );
        })}
      <div className="container d-flex justify-content-between">
      <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.previousPage}>&larr; Previous</button>
      <button disabled={this.state.page+1>Math.ceil(this.state.totalArticle/this.props.items)}type="button" className="btn btn-dark" onClick={this.nextPage}>Next &rarr;</button>
      </div>
      </div>
    )
  }
}
export default News
