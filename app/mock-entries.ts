import {Entry} from './entry';

export var ENTRIES: Entry[] = [
  {"name": "MOF ORIGINAL",
   "description": "Manner of Filing",
   "help": "This is the first filing on a case"
 },

   {"name": "COMPLAINT/PETITION FILED $",
   "description": "Complaint or Petition",
   "help": "A Complaint for Divorce: Informs the court of the filing spouse's
	(Plaintiff) desire to end the marriage, and its filing with the court
	signifies the initiation of the divorce process."
 },
  {"name": "SUMMONS ISSUED",
   "description": "Summons",
   "help": "Court generated document meant to provide legal notice about the law suit.",
   "links": [{"url": "https://courts.arkansas.gov/rules-and-administrative-orders/court-rules/rule-4-summons", "name": " See Arkansas Rules of Civil Procedure Rule 4 for timing and service rules."}]
 },
  {"name": "ANSWER FILED",
   "description": "Answer",
   "help": "An answer must be filed in response to any Complaint or Petition.",
   "links": [{"url": "http://www.arlegalservices.org/answer", "name": "More information."},
   	{"url": "A./static/Answer.pdf", "name": "View Form."}]
 	"required":true
 } ,
   {"name": "RESPONSE/REPLY",
   "description": "Response",
   "help": " This document should reflect an admission or denial of each paragraph of the document in which the party is responding.",
   "required":true
 } ,
   {"name": "RESPONSE TO MOTION FILED",
   "description": "Response",
   "help": " This document should reflect an admission or denial of each paragraph of the document in which the party is responding.",
   "required":true
 } ,
   {"name": "RESPONSE TO REQ FOR ADMISSIONS",
   "description": "Response",
   "help": " This document should reflect an admission or denial of each paragraph of the document in which the party is responding.",
   "required":true
 },
   {"name": "COUNTERCLAIM",
   "description": "Counter Complaint",
   "help": "Pleading filed by Defendant to allege fault in this
	matter is on the Plaintiff"
 } ,
   {"name": "MOTION PROTECTIVE ORDER",
   "description": "Motion for Protective Order",
   "help": "Request by either party to prohibit some
	action or actions. For example, a Protective Order may be drafted to
	prohibit parties from disparaging each other in social media, in front of
	the children, or to friends and family, or prohibit parties from selling
	joint property or otherwise taking away financial accounts.",
	"links": [{"url": "./static/motion_for_protective_order.pdf", "name": "View Form."}]
 } ,
   {"name": "REQUEST FOR ADMISSIONS",
   "description": "Request for Admissions",
   "help": " Are a set of statements sent from one litigant to
	an adversary, for the purpose of having the adversary admit or deny the
	statements or allegations therein."
 } ,
   {"name": "PROPOSED AGREED ORDER",
   "description": "Agreed Decree of Divorce",
   "help": "This document should reflect all agreements
	regarding division of property and child custody and visitation, if
	applicable, and be signed by both parties.",
	"links": [{"url": "./static/Agreed_decree_of_divorce.pdf", "name": "View Form."}]
 } ,
    {"name": "MOTION COMPEL",
   "description": "Motion to Compel",
   "help": " This document should be filed if the opposing party has
	failed to fully respond to discovery requests. Please see the Arkansas
	Rules of Civil Procedure governing the discovery process."
	"links": [{"url": "https://courts.arkansas.gov/rules-and-administrative-orders/court-rules/rule-26-general-provisions-governing-discovery", "name": "More information."}]
 } ,
 	{"name": "MOTION EXTEND SERVICE TIME",
   "description": "Motion to Extend Time",
   "help": "This document should request additional time to
	respond to a pleading or for additional time to serve a party. It should
	include reasons why you believe the Court should grant your Motion."
 },
   {"name": "PROPOSED ORDER TO DISMISS",
   "description": "Motion to Dismiss",
   "help": "This document asks the Court to dismiss the suit or
	countersuit filed against a party and describes the legal reasons in
	support thereof."
 } ,
 	{"name": "MOTION DEFAULT JUDGMENT",
   "description": "Motion for Default Judgment",
   "help": "This document asks the Court to enter a
	judgment in favor of the filing party after the time for the opposing party
	to respond has lapsed and the opposing party failed to respond."
 },
   {"name": "MOTION CUSTODY/VISITATION",
   "description": "Motion for Custody and Visitation",
   "help": "This document asks the Court to
	establish a custody and visitation arrangement."
 },
   {"name": "PROPOSED ORDER PATERNITY &amp; SUPPORT",
   "description": "Petition for Child Support",
   "help": "This document asks the Court to Order the
	opposing party to establish and enforce child support obligations. See
	Administrative Rule 10.",
	"links": [{"url": "https://courts.arkansas.gov/sites/default/files/html/ao_10.htm", "name": "More information."}]
 }

]
