import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Faq } from './faq.model';

@Component({
    templateUrl: './support.component.html',
    styleUrls: ['./support.component.css'],
})
export class SupportComponent {
    ngOnInit(){
        this.search("");
    }
    search = function(text: string){
        this.faqResult = [];
        if(text){
            for (let item of this.faq){
                if(item.question.toUpperCase().includes(text.toUpperCase())){
                    this.faqResult.push(item);
                }
            }
        }else{
            for (let item of this.faq){
                this.faqResult.push(item);
            }
        }
    }
    faqResult:Object = [];
    faq = [
        new Faq("What is document classification?","Document classification is one of the biggest deal among companies who own big data. The task is to assign a document to one or more classes or categories manually or automatically. The documents to be classified may be texts, images, music, etc. Slamby offers fully automated text classification in any language as the highest accuracy rate available in the market and as a most common use case, Slamby classifies product database of online stores related to their category database."),
        new Faq("What is Machine Learning?","Machine learning is a subfield of computer science that gives computers the ability to learn without being explicitly programmed. Machine learning explores the study and construction of algorithms that can learn from and make predictions on data."),
        new Faq("What is Slamby?","Slamby provides language independent document classification solutions with the highest accuracy on a dedicated server that allows companies easily classify and manage their documents."),
        new Faq("What is Slamby Server (API)?","It is an instant, built-in data processing server. Upload your data and create smart functions to process your data. Category recommendation, keyword extraction, matchmaking, search."),
        new Faq("What is Slamby Insight?","Slamby Insight is a free desktop application. You can easily access and manage your Slamby API. The main purpose using Slamby Insight is to increase your productivity of your Slamby server with an easy usage."),
        new Faq("What is Slamby TAU?","Slamby TAU is an integrated data management (open-source) software, using Slamby SDK, communicating real-time with Slamby Server, dedicated for data scientists and managers. Quick real-time data access, data analysis, and data-processing. The main purpose of using Slamby TAU is to increase your productivity of your Slamby server with an easy usage. See more here."),
        new Faq("What is Slamby Twister?","Slamby Twister is an advanced level text classification technology, built to provide high accurate and language-independent solution specially designed for e-commerce market. Developed by Slamby"),
        new Faq("Is it absolutely language-independent? What about Chinese?","Yes. Slamby Twister can make a perfect category recommendation in all languages providing the same accuracy level as well as in Asian languages. Such as; Chinese, Malay, Thai, Vietnamese than in others."),
        new Faq("What is/are the difference(s) between Slamby and other solution providers?","Slamby products are open-sourced products with full transparency. All the features for data processing are instant, your team can use Slamby for production within minutes. Slamby is available as SaaS, or you can download and install it on your machines or in your private cloud. Using Slamby you can use all of our software to support your team. Slamby API, SDKs and desktop applications are all for you."),
        new Faq("I have a Classified Ad Site, how can I get benefit from Slamby?","On your Slamby server, you can store and manage your real-time data, automatize your data management workflows, and get smart insights from your data. By using Slamby services; you can build category recommendation engine, re-categorize your database (in need of re-structuring existing category tree), automize category moderation, detect duplicated products, build similar/related product recommendation engine and so on… Contact our sales team and let us evaluate your business model to inform you how we can empower your business."),
        new Faq("What is the expected accuracy rate for category recommendation?","Using Slamby Twister algorithm, Slamby offers precise text categorization technology. Average accuracy level for Classified Ad Site using 2.000 categories and normal training dataset: 85-94%; working with clean training database: 94-99%."),
        new Faq("How can it be up to 99% accuracy? It means almost perfect categorization solution?","Accuracy rate depends on the quality of the training dataset. You train the Slamby classifier using “training dataset” and quality means how well training data are categorized manually earlier. During the training period, Slamby assumes all the given data are correct excluded some exceptions. Slamby can manage minor mistakes in the training dataset. Shortly for the best data-processing result, the more data you upload, the most accurate results you will have."),
        new Faq("How can I integrate Slamby?","No need for special admin site or complicated process! It works as an API, so it can be integrated into the existing processes in a very short time of period. (Slamby support team may assist you.) Available SDKs are PHP, Python,Net C#, Javascript/Node.js, TypeScript. See our Github page."),
        new Faq("How much does Slamby cost?","You can start for 45 € / core / month and then, you can upgrade your server anytime depends on your need, see our pricing here."),
        new Faq("Which server size do I need?","It depends on the data size you store; service numbers and request numbers. Generally, as more data, you wish to manage as bigger server you need, but it strongly depends on the planned usage, required SLA and response time. As a tip: for start use Slamby with minimum 2 processor cores and 4 GB ram, it should be enough for start."),
        new Faq("Does Slamby provide scalable servers?","Managing data requires power and scalability. Using parallel working and dedicated servers, Slamby provides horizontal and vertical scalability at the same time."),
        new Faq("What does the SLA rate Slamby provide?","SLA depends on the purchased server number. The basic level is 95%. Can be increased up to 99 % by using vertical servers."),
        new Faq("Can I upgrade or downgrade my Slamby Server using SaaS?","Slamby offers perfect flexibility. You can upgrade or downgrade your server anytime."),
        new Faq("Can I download and install Slamby API on my machines?","Yes, you can easily download and install it by 4 steps. Check our /getting-started tutorial."),
        new Faq("What is the query limit in Slamby?","There is no query limit. Data is yours, server is yours."),
        new Faq("How can I cancel my contract?","We are here to provide great solutions to empower your business. If you feel the opposite, you are free to terminate your contract anytime."),
        new Faq("Can Slamby assure my data security?","Data privacy is very important to us and we do our best to protect your data and information. Therefore, Slamby offers dedicated servers to maximize your data security. Each customer has a dedicated Slamby server with dedicated resources and enterprise-grade hosting security. If you need the maximum data privacy, then install Slamby API inside on your machine(s) and do not let your data out of your company."),
        new Faq("What are Slamby’s terms and conditions and privacy policy?","You can see our terms and conditions and privacy policy under our legal section.")
    ]
}