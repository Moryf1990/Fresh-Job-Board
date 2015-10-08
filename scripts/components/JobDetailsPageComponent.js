var React=require('react');
var Backbone=require('backbone');

module.exports=React.createClass({
	render: function() {
		return(
			<div className="col-sm-8" id="detailsId">
				<h1 className="DetailsPageHeader">Information Security Engineer</h1>
				<h3 className="DetailsPageCompany">MaxPlay, Austin, TX</h3>
				<button className="button">angularjs</button><button className="button">d3.js</button><button className="button">javascript</button><button className="button">ui</button><button className="button">css</button>		
				<h1 className="DetailsPageDescription">Job description</h1>
				<div className="JobDetailsBorder"> </div>
				<h3 className="JobDetailsText">MaxPlay is a high-energy, fast-growing startup
				based in Austin, Texas, helping companies ethically unlock the value
				hidden in their consumer data. We empower some of the coolest clients to build
				thriving, sustainable businesses with our leading-edge Digital Genome
				technology. With the MaxPlay platform, our clients can understand and
				build relationships with their customers in a way that has never 
				before been possible.</h3>
				<h3 className="JobDetailsText">We are a team of agile, boundary-pushing
				problem-solvers who love to invent and improve. The Security Engineer will
				work closely with the development and operations team to ensure the security 
				and privacy of our systems data. You'll audit and test our firewalls, APIs, 
				code, databases, and protocols to make sure our security practices are 
				beyond state of the art. Tools like nmap, iptables, and tepflow get you 
				excited, and you aren't afraid of legal and compliance paperwork. The words
				"heartbleed" and "Shellshock" are fresh in your memory. You'll participate in 
				code reviews, weigh in on architectural design decisions, test for vulnerabilities,
				document processes, and assist with audits.</h3>
				<h3 className="JobDetailsText">What You Must Have:</h3>
				<h3 className="JobDetailsText">Cultural fit and eternal optimism. We are an ambitious 
				startup setting out to lead a revolution. We fearlessly take big chances and know that 
				optimism and perserverance are the keys to wild success - and we are tested on that 
				daily. If this excites you, read on. If it makes you feel queasy, skip to the next 
				company.</h3>
				<h3 className="JobDetailsText">Curiosity backed by execution. This is a tech startup,
				and you should be prepared to geek out on the intricacies of big data or the nuances of 
				co-ownership of data rights. There's a lot to learn and define, and you will naturally 
				need to be obsessed with staying ahead of the curve. But it doesn't stop there. You must 
				leverage the learning and turn it into creating amazing experiences both inside and outside
				of MaxPlay</h3>
				<h3 className="JobDetailsText">Motivation and determination. Exciting - and daunting - challenges
				face us every day at MaxPlay. We excel in the pursuit of challenging goals because we are 
				intrinsially motivated to change the world and are determined to overcome any setbacks or 
				obstacles on our way there. MaxPlay is looking for fighters, who go to bed and wake up each 
				day with a fire in the belly</h3>
			</div>
		)
	}
})

