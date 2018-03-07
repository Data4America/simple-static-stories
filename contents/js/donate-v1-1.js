(function(global, $) {
  var content = '' +
    '<div style="text-align:center;">' +
    '<div class="dfa-donate" style="width:100%;">' +
    ' <div class="dfa-loading">' +
    '   <div class="loader">Loading</div>' +
    '   <h2 class="">Processing your information...</h2>' +
    ' </div>' +
    // DONATE FORM
    '<form class="dfa-donate-form" action="" method="post">' +
    ' <table>' +
    '   <tr>' +
    '     <td>' +
    '       <h4 class="dfa-header-text donate" style="margin-bottom: 0;">' +
    '         Want to see more from Data<span style="color:#CC0001; font-style:italic;">4</span>America? <br>Consider a tax-deductible gift.' +
    '       </h4>' +
    '       <h4 class="dfa-header-text sponsor" style="display:none; margin: 0; font-size: 1.4em;">' +
    '         Sponsor a Policy Issue' +
    '       </h4>' +
    '       <h4 class="dfa-header-text member" style="display:none;">' +
    '         Become a founding Data4America member' +
    '       </h4>' +
    '     </td>' +
    '   </tr>' +
    '   <tr class="dfa-field dfa-field-member">' +
    '     <td>' +
    '       <div>Data4America Memberships are annual opportunities to support 100% of our work.</div>' +
    '       <div style="margin:1.5em auto 1em">Here\'s what you\'ll receive as a Founding Member:</div>' +
    '       <ol>' +
    '         <li>Attend the annual Data4America Conference in San Francisco, CA.</li>' +
    '         <li>Get invited to attend monthly fireside chats held in San Francisco or Washington D.C. These chats are highlighted by local and national experts across the technology, data science, media, and public policy spaces.</li>' +
    '         <li>Participate in an ongoing Data4America online working group designed to help us make improvements to our published content, open data sets, events, and technologies.</li>' +
    '       </ol>' +
    '       <p style="font-style:italic; color:#777; font-size:0.8em;">' +
    '         We issue donation receipts at the end of each calendar year.' +
    '       </p>' +
    '     </td>' +
    '   </tr>' +
    '   <tr class="dfa-field dfa-field-sponsor">' +
    '     <td style="padding-top:0;">' +
    '       <div class="dfa-hiw" style="margin: 0 0 1.2em;">' +
    '         <strong>How It Works:</strong>' +
    '         You can sponsor any issue at the local, state, or federal level.  Data4America will actively promote the policy channel and start accepting crowdsourced submissions for it.' +
    '         <br /><br />' +
    '         Youâ€™ll be publicly recognized for the policy channel sponsorship. Data4America only publishes what the non-partisan Editorial Board approves.' +
    '       </div>' +
    '       <div class="dfa-sponsor-step step1" style="display:block;">' +
    '         <h1><strong>Step 1:</strong> Do you want to sponsor a local, state, or federal-level policy issue?</h1>' +
    '         <div class="txtC">' +
    '           <a class="dfa-button dfa-step-button" data-step="city" href="javascript:;">City</a>' +
    '           <a class="dfa-button dfa-step-button" data-step="state" href="javascript:;">State</a>' +
    '           <a class="dfa-button dfa-step-button" data-step="country" href="javascript:;">Federal</a>' +
    '         </div>' +
    '       </div>' +
    '       <div class="dfa-sponsor-step step2" style="display:none;">' +
    '         <div class="dfa-sponsor-step-form city">' +
    '           <h1><strong>Step 2:</strong> Choose City:</h1>' +
    '           <div class="dfa-input-text" style="margin-top:0; margin-bottom: 0.6em; width: 284px;"><input type="text" name="city" value="" placeholder="Write in Name" /></div>' +
    '           <div class="dfa-input-text" style="margin-top:0; margin-bottom: 0.6em; width: 284px;"><input type="text" name="state" value="" placeholder="Write in State" /></div>' +
    '           <div class="dfa-input-text" style="margin-top:0; margin-bottom: 0.6em; width: 284px;"><input type="text" name="country" value="" placeholder="Write in Country" /></div>' +
    '         </div>' +
    '         <div class="dfa-sponsor-step-form state">' +
    '           <h1><strong>Step 2:</strong> Choose State:</h1>' +
    '           <div class="dfa-input-text" style="margin-top:0; margin-bottom: 0.6em; width: 284px;"><input type="text" name="state" value="" placeholder="Write in Name" /></div>' +
    '           <div class="dfa-input-text" style="margin-top:0; margin-bottom: 0.6em; width: 284px;"><input type="text" name="country" value="" placeholder="Write in Country" /></div>' +
    '         </div>' +
    '         <div class="dfa-sponsor-step-form country">' +
    '           <h1><strong>Step 2:</strong> Choose Country:</h1>' +
    '           <select class="dfa-select select-countries" name="sponsor_country"></select>' +
    '         </div>' +
    '       </div>' +
    '       <div class="dfa-sponsor-step step3">' +
    '         <h1><strong>Step 3:</strong> Choose your Issue:</h1>' +
    '         <div style="margin: 0 0 0.6em;">What type of story would you like to sponsor?</div>' +
    '         <select class="dfa-select" name="sponsor_issue"></select>' +
    '         <div class="write_in" style="display:none;">' +
    '           <h3 style="margin: 1em 0.3em 0.4em"></h3>' +
    '           <div class="dfa-input-text writein" style="margin-top:0;"><input type="text" name="write_in" value="" /></div>' +
    '         </div>' +
    '       </div>' +
    '       <div class="dfa-sponsor-step step4">' +
    '         <h1 style="text-align:center;">Choose Your Donation: <strong class="amount">$25,000</strong></h1>' +
    '         <div class="dfa-range-slider">' +
    '           <span class="label">$10,000</span>' +
    '           <input class="input-range" type="range" step="250" value="25000" min="10000" max="100000">' +
    '           <span class="label">$100,000</span>' +
    '         </div> ' +
    '       </div>' +
    '     </td>' +
    '   </tr>' +
    '   <tr class="dfa-field">' +
    '     <td colspan="2">' +
    '       <div class="error-message ui message red" style="margin-bottom:0.6em; display:none;">' +
    '         <b>ERROR: </b>' +
    '         <span class="text"></span>' +
    '       </div>' +
    '     </td>' +
    '   </tr>' +
    '   <tr class="dfa-field donation-input">' +
    '     <td>' +
    '       <div class="dfa-amount">' +
    '         <span class="preinput">$</span>' +
    '         <input type="number" name="amount" class="dfa-amount-input" value="" placeholder="Enter Amount" />' +
    '         <span class="postinput">One Time</span>' +
    '         <div class="dfa-arrow-control"><div class="arrow up"></div><div class="arrow down"></div></div>' +
    '       </div>' +
    '     </td>' +
    '   </tr>' +
    '   <tr class="dfa-field price-options">' +
    '     <td>' +
    '       <span class="dfa-price-option" data-value="10">$10</span>' +
    '       <span class="dfa-price-option" data-value="25">$25</span>' +
    '       <span class="dfa-price-option" data-value="100">$100</span>' +
    '       <span class="dfa-price-option" data-value="250">$250</span>' +
    '       <span class="dfa-price-option" data-value="500">$500</span>' +
    '       <span class="dfa-price-option rd" data-value="1000">$1,000</span>' +
    '     </td>' +
    '   </tr>' +
    '   <tr class="dfa-field monthly-check">' +
    '     <td>' +
    '       <div class="dfa-check">' +
    '         <input class="dfa-monthly-subscription" name="monthly" type="checkbox" value="1" >' +
    '         <label>Make this a recurring monthly gift</label>' +
    '       </div>' +
    '     </td>' +
    '   </tr>' +
    //'   <tr class="dfa-field choose-donation">' +
    //'     <td>' +
    //'       <div class="dfa-check">' +
    //'         <input class="dfa-choose-donation" name="choose" type="checkbox" value="1">' +
    //'         <label>Choose where my donation goes</label>' +
    //'       </div>' +
    //'     </td>' +
    //'   </tr>' +
    '   <tr class="dfa-field choose-donation-table" style="display:none;">' +
    '     <td>' +
    '       <div class="dfa-table-budget">' +
    '       <table>' +
    '         <tr>' +
    '           <th>Expense</th>' +
    '           <th>% of Budget</th>' +
    '           <th>Your Selection</th>' +
    '         </tr>' +
    '         <tr>' +
    '           <td>Staff</td>' +
    '           <td class="txtC">13%</td>' +
    '           <td><div class="dfa-input-text"><input type="number" data-name="Staff" placeholder="Enter %" value="" /></div></td>' +
    '         </tr>' +
    '         <tr>' +
    '           <td>Program</td>' +
    '           <td class="txtC">78%</td>' +
    '           <td><div class="dfa-input-text"><input type="number" data-name="Program" placeholder="Enter %" value="" /></div></td>' +
    '         </tr>' +
    '         <tr>' +
    '           <td>Operations</td>' +
    '           <td class="txtC">4%</td>' +
    '           <td><div class="dfa-input-text"><input type="number" data-name="Operations" placeholder="Enter %" value="" /></div></td>' +
    '         </tr>' +
    '         <tr>' +
    '           <td>Fundraising</td>' +
    '           <td class="txtC">5%</td>' +
    '           <td><div class="dfa-input-text"><input type="number" data-name="Fundraising" placeholder="Enter %" value="" /></div></td>' +
    '         </tr>' +
    '         <tr class="dfa-budget-total">' +
    '           <td></td>' +
    '           <td class="txtC">100%</td>' +
    '           <td class="num txtC">0%</td>' +
    '         </tr>' +
    '       </table>' +
    '       </div>' +
    '     </td>' +
    '   </tr>' +
    '   <tr class="dfa-field anon-check">' +
    '     <td>' +
    '       <div class="dfa-check">' +
    '         <input class="dfa-anon" name="anon" type="checkbox" value="1">' +
    '         <label>Donate Anonymously</label>' +
    '       </div>' +
    '     </td>' +
    '   </tr>' +
    '   <tr class="dfa-cheque" style="display:none;">' +
    '     <td style="background-color: #eee; border-radius: 10px; padding: 1em;">' +
    '       <h1 style="text-align:center;">Sponsor a Channel by Check</h1>' +
    '       <p>Please make your donation check payable to: <strong>Silicon Valley Community Foundation</strong>. Put <strong>Data4America</strong> in the Memo line.</p>' +
    '       <p>For Policy Issue sponsorships, please write the name of the issue in the memo of your check. Indicate what city, state, or country it is for.</p>' +
    '       <p>If you\'re sponsoring a policy channel in honor of someone or want to sponsor a channel anonymously please write that in the memo of your check too.</p>' +
    '       <p style="font-weight: bold; text-align: center; background: #ddd; padding-top: 0.6em;">Silicon Valley Community Foundation<br />' +
    '       Attn: Gifts Administration // Data4America<br />' +
    '       2440 West El Camino Real, Suite 300<br />' +
    '       Mountain View, CA 94040<br />' +
    '       EIN: 20-5205488</p>' +
    '       <p>Your donation receipt will be mailed within one to two weeks after the donation has been processed. Your tax deductible receipt will be mailed once Data4America receives its fiscal sponsorshipâ€”expected to be before October 30, 2015.</p>' +
    '       <p style="text-align:center;"><a href="https://www.dropbox.com/s/1xyqwfz0zq1wxng/Donation%20Pledge%20Form%20-%20Data4America.pdf" target="_blank">Download our Donation Slip</a></p>' +
    '     </td>' +
    '   </tr>' +
    '   <tr class="dfa-cheque-member" style="display:none;">' +
    '     <td style="background-color: #eee; border-radius: 10px; padding: 1em;">' +
    '       <h1 style="text-align:center;">Become a Member by Check</h1>' +
    '       <p>Please make your donation check payable to: <strong>Silicon Valley Community Foundation</strong>. Put <strong>Data4America</strong> in the Memo line.</p>' +
    '       <p>If you\'re becoming a member in honor of someone or want to become a member anonymously, please write that in the memo of your check.</p>' +
    '       <p style="font-weight: bold; text-align: center; background: #ddd; padding-top: 0.6em;">Silicon Valley Community Foundation<br />' +
    '       Attn: Gifts Administration // Data4America<br />' +
    '       2440 West El Camino Real, Suite 300<br />' +
    '       Mountain View, CA 94040<br />' +
    '       EIN: 20-5205488</p>' +
    '       <p>Your donation receipt will be mailed within one to two weeks after the donation has been processed. Your tax deductible receipt will be mailed once Data4America receives its fiscal sponsorshipâ€”expected to be before October 30, 2015.</p>' +
    '       <p style="text-align:center;"><a href="https://www.dropbox.com/s/1xyqwfz0zq1wxng/Donation%20Pledge%20Form%20-%20Data4America.pdf" target="_blank">Download our Donation Slip</a></p>' +
    '     </td>' +
    '   </tr>' +
    '   <tr class="dfa-field action-buttons">' +
    '     <td style="text-align:center;">' +
    '       <div>' +
    '         <a class="dfa-button donateByCC" href="javascript:;">Give by <i class="icn credit-card">credit card</i></a>' +
    '         <a class="dfa-button btnCheque dfa-donate-scroll" href="javascript:;">Give by <i class="icn cheque">cheque</i></a>' +
    //'         <a class="dfa-button donatePaypal" href="javascript:;">Give by <i class="icn paypal">PayPal</i></a></p>' +
    '       </div>' +
    '     </td>' +
    '   </tr>' +
    '   <tr>' +
    '     <td>' +
    '       <a class="dfa-link-donate dfa-donate-scroll" style="display:none;" href="javascript:;">Make a one-time donation</a>' +
    // '       <a class="dfa-link-sponsor dfa-donate-scroll" href="javascript:;">Sponsor a Policy Issue</a>' +
    //'       <a class="dfa-link-member" href="javascript:;">Become a founding member</a>' +
    '     </td>' +
    '   </tr>' +
    '   <tr>' +
    '     <td style="padding-bottom:0;">' +
    '       <p style="color:#777; font-size:0.65em; text-align:left;">Data4America is a California nonprofit corporation being fiscally sponsored by the Silicon Valley Community Foundation. Donations to Data4America will be processed by and made tax deductible through the Silicon Valley Community Foundation, a 501(c)(3) public charity registered in the United States, EIN# 20-5205488. Contributions will be tax-deductible to the fullest extent of the law. SVCF will provide a formal'+
    '       acknowledgment letter containing tax-deduction language for your records.</p>' +
    '     </td>' +
    '   </tr>' +
    ' </table>' +
    '</form>' +
    // PERSONAL INFO FORM
    '<form class="dfa-personal-info-form" style="display:none;" action="" method="post">' +
    ' <div class="dfa-mobile-header">' +
    // '   <a href="javascript:;" class="dfa-button dfa-button-back">Back</a> ' +
    '   <a href="javascript:;" class="dfa-button dfa-button-proceed">Next</a>' +
    ' </div>' +
    ' <table>' +
    '   <tr class="dfa-field">' +
    '     <td style="text-align:center;" colspan="2">' +
    '       <h4>Let us send you awesome stuff!</h4>' +
    '     </td>' +
    '   </tr>' +
    '   <tr class="dfa-field">' +
    '     <td colspan="2">' +
    '       <div class="dfa-check">' +
    '         <input checked="checked" class="dfa-send-newsletters" name="newsletters" type="checkbox" value="1">' +
    '         <label for="dfa-send-newsletters">Send me new data stories by email</label>' +
    '       </div>' +
    '     </td>' +
    '   </tr>' +
    '   <tr class="dfa-field">' +
    '     <td colspan="2">' +
    '       <span class="dfa-field-label">Name</span>' +
    '       <div class="dfa-input-text"><input type="text" name="name" value="" /></div>' +
    '     </td>' +
    '   </tr>' +
    '   <tr class="dfa-field">' +
    '     <td colspan="2">' +
    '       <span class="dfa-field-label" style="">Email Address</span>' +
    '       <div class="dfa-input-text"><input type="text" name="email" value="" /></div>' +
    '     </td>' +
    '   </tr>' +
    '   <tr class="dfa-field">' +
    '     <td colspan="2">' +
    '       <span class="dfa-field-label">Mailing Address</span>' +
    '       <div class="dfa-input-text"><input type="text" name="address" value="" /></div>' +
    '     </td>' +
    '   </tr>' +
    '   <tr class="dfa-field">' +
    '     <td colspan="2">' +
    '       <span class="dfa-field-label">Mailing Address 2</span>' +
    '       <div class="dfa-input-text"><input type="text" name="address2" value="" /></div>' +
    '     </td>' +
    '   </tr>' +
    '   <tr class="dfa-field">' +
    '     <td colspan="2">' +
    '       <span class="dfa-field-label">City</span>' +
    '       <div class="dfa-input-text"><input type="text" name="city" value="" /></div>' +
    '     </td>' +
    '   </tr>' +
    '   <tr class="dfa-field">' +
    '     <td style="vertical-align:bottom">' +
    '       <select class="dfa-select" name="state">' +
    '         <option value="">Choose State</option>' +
    '         <option value="AL">Alabama</option><option value="AK">Alaska</option><option value="AZ">Arizona</option>' +
    '         <option value="AR">Arkansas</option><option value="CA">California</option><option value="CO">Colorado</option>' +
    '         <option value="CT">Connecticut</option><option value="DE">Delaware</option><option value="DC">District Of Columbia</option>' +
    '         <option value="FL">Florida</option><option value="GA">Georgia</option><option value="HI">Hawaii</option>' +
    '         <option value="ID">Idaho</option><option value="IL">Illinois</option><option value="IN">Indiana</option>' +
    '         <option value="IA">Iowa</option><option value="KS">Kansas</option><option value="KY">Kentucky</option>' +
    '         <option value="LA">Louisiana</option><option value="ME">Maine</option><option value="MD">Maryland</option>' +
    '         <option value="MA">Massachusetts</option><option value="MI">Michigan</option><option value="MN">Minnesota</option>' +
    '         <option value="MS">Mississippi</option><option value="MO">Missouri</option><option value="MT">Montana</option>' +
    '         <option value="NE">Nebraska</option><option value="NV">Nevada</option><option value="NH">New Hampshire</option>' +
    '         <option value="NJ">New Jersey</option><option value="NM">New Mexico</option><option value="NY">New York</option>' +
    '         <option value="NC">North Carolina</option><option value="ND">North Dakota</option><option value="OH">Ohio</option>' +
    '         <option value="OK">Oklahoma</option><option value="OR">Oregon</option><option value="PA">Pennsylvania</option>' +
    '         <option value="RI">Rhode Island</option><option value="SC">South Carolina</option><option value="SD">South Dakota</option>' +
    '         <option value="TN">Tennessee</option><option value="TX">Texas</option><option value="UT">Utah</option>' +
    '         <option value="VT">Vermont</option><option value="VA">Virginia</option><option value="WA">Washington</option>' +
    '         <option value="WV">West Virginia</option><option value="WI">Wisconsin</option><option value="WY">Wyoming</option>' +
    '       </select>' +
    '     </td>' +
    '     <td>' +
    '       <span class="dfa-field-label">Zip Code</span>' +
    '       <div class="dfa-input-text"><input type="text" name="zip" value="" /></div>' +
    '     </td>' +
    '   </tr>' +
    '   <tr class="dfa-field">' +
    '     <td colspan="2" style="padding: 0;"><hr style="width: 100%;"></td>' +
    '   </tr>' +
    '   <tr class="dfa-field">' +
    '     <td colspan="2">' +
    '       <select class="dfa-select" name="tshirt">' +
    '         <option selected="selected" value="">Your tee-shirt size</option>' +
    '         <option>Men\'s Small</option><option>Men\'s Medium</option><option>Men\'s Large</option>' +
    '         <option>Men\'s XL</option><option>Men\'s XXL</option><option>Men\'s XXXL</option>' +
    '         <option>Women\'s Small</option><option>Women\'s Medium</option><option>Women\'s Large</option>' +
    '         <option>Women\'s XL</option><option>Women\'s XXL</option><option>Child Small</option>' +
    '         <option>Child Medium</option><option>Child Large</option>' +
    '       </select>' +
    '     </td>' +
    '   </tr>' +
    '   <tr class="dfa-field">' +
    '     <td colspan="2">' +
    '       <span class="dfa-field-label">Your Facebook Profile URL</span>' +
    '       <div class="dfa-input-text"><input type="text" name="fb" value="" /></div>' +
    '     </td>' +
    '   </tr>' +
    '   <tr class="dfa-field">' +
    '     <td colspan="2">' +
    '       <span class="dfa-field-label">Your Twitter Profile URL</span>' +
    '       <div class="dfa-input-text"><input type="text" name="tw" value="" /></div>' +
    '     </td>' +
    '   </tr>' +
    '   <tr class="dfa-field">' +
    '     <td colspan="2">' +
    '       <span class="dfa-field-label">Your Linkedin Profile URL</span>' +
    '       <div class="dfa-input-text"><input type="text" name="li" value="" /></div>' +
    '     </td>' +
    '   </tr>' +
    '   <tr>' +
    '     <td colspan="2" style="text-align:center;">' +
    '       <a href="javascript:;" class="dfa-button dfa-button-proceed">Next</a>' +
    // '       <a href="javascript:;" class="dfa-button dfa-button-back">Back</a> ' +
    '     </td>' +
    '   </tr>' +
    '  </table>' +
    '  <input type="hidden" name="sendNewsletters" value="yes" />' +
    '  <input type="hidden" name="anon" value="no" />' +
    '  <input type="hidden" name="donationType" value="onetime" />' +
    '  <input type="hidden" name="donationId" value="" />' +
    '  <input type="hidden" name="amount" value="" />' +
    '  <input type="hidden" name="donateto" value="General Fund" />' +
    '</form>' +
    // POST LEARN MORE
    ' <div class="dfa-learn-more">' +
    '   <div class="dfa-mobile-header">' +
    '     <a class="dfa-button dfa-button-back dfa-donate-scroll" href="javascript:;">Back</a>' +
    '   </div>' +
    '   <p>Your support will help us do the following:</p>' +
    '   <ol>' +
    '     <li>Publish data-driven and educational stories about politics, government, and public policy across all levels of government. These stories are sourced from the crowd, approved by our non-partisan Editorial Board, and syndicated across the web.</li>' +
    '     <li>Build software to make some of these data sets publicly available for anyone in the world to use.</li>' +
    '     <li>Put on special events bringing together leaders across government, technology, and data science. We\'ll be discussing what the future of America is--and how does technology help us get there.</li>' +
    '     <li>Potentially expand the Data4America concept to other countries utilizing our underlying technology and distributed editorial board model. Imagine Data4India, Data4UK, Data4Canada, and even Data4China...</li>' +
    '   </ol>' +
    '   <p style="text-align:center;">' +
    '     <a class="dfa-button dfa-button-back dfa-donate-scroll" href="javascript:;">Back</a>' +
    '   </p>' +
    ' </div>' +
    // CHECK MODULE
    ' <div class="dfa-cheque-mod">' +
    '   <h1 style="text-align:center;">Donate by Check</h1>' +
    '   <p>Please make your donation check payable to: <strong>Silicon Valley Community Foundation</strong>.</p>' +
    '   <p>IMPORTANT: Put <strong>Data4America</strong> in the Memo line.</p>'+
    '   <p>If you\'re donating in honor of someone or want to donate anonymously, please write that in the memo of your check too.</p>' +
    '   <p style="font-weight: bold; text-align: center; background: #ddd; padding-top: 0.6em;">Silicon Valley Community Foundation<br />' +
    '   Attn: Gifts Administration // Data4America<br />' +
    '   2440 West El Camino Real, Suite 300<br />' +
    '   Mountain View, CA 94040<br />' +
    '   EIN: 20-5205488</p>' +
    '   <p>Your donation receipt will be mailed within one to two weeks after the donation has been processed. You\'ll be receiving the receipt from our fiscal sponsor The Silicon Valley Community Foundation.</p>' +
    '   <p style="text-align:center;"><a href="https://www.dropbox.com/s/1xyqwfz0zq1wxng/Donation%20Pledge%20Form%20-%20Data4America.pdf" target="_blank">Download our Donation Slip</a></p>' +
    '   <p style="color:#777; font-size:0.8em;">Data4America is a California nonprofit corporation being fiscally sponsored by the Silicon Valley Community Foundation. Donations to Data4America will be processed by and made tax deductible through the Silicon Valley Community Foundation, a 501(c)(3) public charity registered in the United States, EIN# 20-5205488. Contributions will be tax-deductible to the fullest extent of the law. SVCF will provide' +
    '    a formal acknowledgment letter containing tax-deduction language for your records.</p>' +
    '   <p style="text-align:center;">' +
    '     <a class="dfa-button dfa-button-back dfa-donate-scroll" href="javascript:;">Back</a>' +
    '   </p>' +
    ' </div>' +
    // THANK YOU MODULE
    ' <div class="dfa-thank-you">' +
    '   <div class="thankyou-monthly" style="display:none;">' +
    '     <h1 style="margin-bottom: 1.2em;">' +
    '       Your <span class="anon"></span> <strong class="amount"></strong> monthly donation to <strong><span style="color:#012868">D</span><span style="font-style:italic;color:#cc0101">4</span><span style="color:#012868">A</span></strong> is greatly appreciated!!' +
    '     </h1>' +
    '     <p>' +
    '       Your card has successfully been charged <strong class="amount"></strong>.' +
    '     </p>' +
    '     <p>' +
    '       We\'ll email you a receipt for this donation and for all future monthly donations to:' +
    '       <strong class="email-text"></strong>.' +
    '     </p>' +
    '     <p>' +
    '       To cancel your monthly donation, email us at <a href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=supporters@data4america.org&tf=1" target="_blank">supporters@data4america.org</a>.' +
    '     </p>' +
    '   </div>' +
    '   <div class="thankyou-onetime" style="display:none;">' +
    '     <h1 style="margin-bottom: 1.2em;">' +
    '       Your <span class="anon"></span> <strong class="amount"></strong> donation to <strong><span style="color:#012868">D</span><span style="font-style:italic;color:#cc0101">4</span><span style="color:#012868">A</span></strong> is greatly appreciated!' +
    '     </h1>' +
    '     <p>' +
    '       Your card has been successfully charged <strong class="amount"></strong>.' +
    '     </p>' +
    '     <p>' +
    '       We\'ll send you a receipt for this donation to: <strong class="email-text"></strong>.' +
    '     </p>' +
    '   </div>' +
    '   <div class="thankyou-member" style="display:none;">' +
    '     <h1 style="margin-bottom: 1.2em;">' +
    '       Thank You for your become a <strong><span style="color:#012868">D</span><span style="font-style:italic;color:#cc0101">4</span><span style="color:#012868">A</span></strong> founding member!' +
    '     </h1>' +
    '     <p>' +
    '       Your card has been successfully charged <strong class="amount"></strong>.' +
    '     </p>' +
    '     <p>' +
    '       We\'ll send you a receipt for this donation to: <strong class="email-text"></strong>.' +
    '     </p>' +
    '   </div>' +
    '   <div class="thankyou-sponsor" style="display:none;">' +
    '     <h1 style="margin-bottom: 1.2em;">' +
    '       Thank You for sponsoring a Data4America Policy Channel!' +
    '     </h1>' +
    '     <p>' +
    '       Your card has been successfully charged <strong class="amount"></strong>.' +
    '     </p>' +
    '     <p>' +
    '       We\'ll send you a receipt for this donation to: <strong class="email-text"></strong>.' +
    '     </p>' +
    '   </div>' +
    '   <p class="thankyou-video" style="padding:0.6em;"></p>' +
    '   <p style="padding: 0 5px 0; text-align: center; font-size: 1.2em; margin: 0;">' +
    '     Share your support' +
    '   </p>' +
    '   <p style="padding: 0 5px 5px; margin: 0;">' +
    // '     <iframe border="0" src="https://dev.data4america.org/embed-share.html" style="width:100%; height:40px; border:none;"></iframe>' +
    '    <div class="dfa-share" style="text-align:center;">'+
    '        <div class="container">'+
    '            <a href="https://www.facebook.com/sharer/sharer.php?u=http://data4america.org/donate" target="_blank" class="ui facebook button">'+
    '              <i class="ui facebook icon"></i>'+
    '              <span class="text">Share</span>'+
    '            </a>'+
    '            <a class="ui twitter button" href="https://twitter.com/intent/tweet?text=Help%20%40Data4America%20bridge%20data%20and%20conversations%20to%20advance%20the%20understanding%20of%20policy.%0AMake%20a%20tax-deductible%20donation%3A%20http%3A%2F%2Fdata4america.org%2Fdonate&source=webclient" target="_blank">'+
    '              <i class="ui twitter icon"></i>'+
    '              <span class="text">Tweet</span>'+
    '            </a>'+
    '            <a class="ui email button" href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to&su=Help%20Data4America%20bridge%20data%20and%20conversations%20to%20advance%20the%20understanding%20of%20policy&body=Make%20a%20tax-deductible%20donation%3A%20http%3A%2F%2Fdata4america.org%2Fdonate&tf=1" target="_blank">'+
    '              <i class="icon mail"></i>'+
    '              Email'+
    '            </a>'+
    '        </div>'+
    '        <div class="container mobile">'+
    '            <a class="ui facebook button circular icon" href="https://www.facebook.com/sharer/sharer.php?u=http://data4america.org/donate" target="_blank">'+
    '              <i class="ui facebook icon"></i>'+
    '            </a>'+
    '            <a class="ui twitter button circular icon" href="https://twitter.com/intent/tweet?text=Help%20%40Data4America%20bridge%20data%20and%20conversations%20to%20advance%20the%20understanding%20of%20policy.%0AMake%20a%20tax-deductible%20donation%3A%20http%3A%2F%2Fdata4america.org%2Fdonate&source=webclient" target="_blank">'+
    '              <i class="ui twitter icon"></i>'+
    '            </a>'+
    '            <a class="ui email button circular icon" href="mailto:?subject=Help%20Data4America%20bridge%20data%20and%20conversations%20to%20advance%20the%20understanding%20of%20policy&body=Make%20a%20tax-deductible%20donation%3A%20http%3A%2F%2Fdata4america.org%2Fdonate" target="_blank">'+
    '              <i class="icon mail"></i>'+
    '            </a>'+
    '            <a class="circular ui icon button orange sms" href="javascript:;">'+
    '              <i class="icon-sms"></i>'+
    '            </a>'+
    '        </div>'+
    '      </div>'+
    '   </p>' +
    '   <p style="padding: 10px 0 0; text-align: center; font-size: 1.4em; margin: 0;">' +
    '     <a href="javascript:;" class="dfa-btn-donate-again">Donate Again</a>'
    '   </p>' +
    ' </div>' +
    // DFA BUDGET MODULE
    ' <div class="dfa-budget" style="display:none;">' +
    '   <table>' +
    '   <tr class="dfa-field">' +
    '     <td>' +
    '       <h4 style="text-align:center">Data4America plans for a $4,000,000 operating budget throughout 2015 and 2016.</h4>' +
    '     </td>' +
    '   </tr>' +
    '   <tr class="dfa-field dfa-field-budget" style="display:table-row;">' +
    '     <td>' +
    '       <div class="dfa-table-budget">' +
    '       <table>' +
    '         <tr>' +
    '           <th style="text-align:left;">Expense</th>' +
    '           <th>% of Budget</th>' +
    '         </tr>' +
    '         <tr>' +
    '           <td>Program</td>' +
    '           <td class="txtC">78%</td>' +
    '         </tr>' +
    '         <tr>' +
    '           <td>Staff</td>' +
    '           <td class="txtC">13%</td>' +
    '         </tr>' +
    '         <tr>' +
    '           <td>Operations</td>' +
    '           <td class="txtC">4%</td>' +
    '         </tr>' +
    '         <tr>' +
    '           <td>Fundraising</td>' +
    '           <td class="txtC">5%</td>' +
    '         </tr>' +
    '         <tr class="dfa-budget-total">' +
    '           <td></td>' +
    '           <td class="txtC">100%</td>' +
    '         </tr>' +
    '       </table>' +
    '       </div>' +
    '     </td>' +
    '   </tr>' +
    '   </table>' +
    '   <p style="text-align:center;">' +
    '     <a class="dfa-button dfa-button-back-cheque dfa-donate-scroll" href="javascript:;">Back</a>' +
    '   </p>' +
    ' </div>' +
    '</div>' +
    '</div>';

    $('.body-text').html(content);

    function init($mod) {
      var $mod = $mod,
        $modal = $mod.find('.dfa-donate-modal'),
        $formDonate = $mod.find('.dfa-donate-form'),
        $donateScroll = $mod.find('.dfa-donate-scroll'),
        $formPersonalInfo = $mod.find('.dfa-personal-info-form'),
        $modLearnMore = $mod.find('.dfa-learn-more'),
        $secCheque = $mod.find('.dfa-cheque'),
        $memberCheque = $mod.find('.dfa-cheque-member'),
        $modCheque = $mod.find('.dfa-cheque-mod'),
        $modLoading = $mod.find('.dfa-loading'),
        $modThankYou = $mod.find('.dfa-thank-you'),
        $modBudget = $mod.find('.dfa-budget'),
        $amount = $mod.find('.dfa-amount'),
        $input = $mod.find('.dfa-amount-input'),
        $checkMonthly = $mod.find('.dfa-monthly-subscription'),
        $checkChooseDonation = $mod.find('.dfa-choose-donation'),
        $btnCreditCard = $mod.find('.donateByCC'),
        $btnCheque = $mod.find('.btnCheque'),
        $btnBack = $mod.find('.dfa-button-back'),
        $btnBackCheque = $mod.find('.dfa-button-back-cheque'),
        $btnDonateAgain = $mod.find('.dfa-btn-donate-again'),
        $btnProceed = $mod.find('.dfa-button-proceed'),
        $btnInfoBack = $mod.find('.dfa-button-back'),
        $linkLearnMore = $mod.find('.dfa-link-learn-more'),
        $linkBudget = $mod.find('.dfa-link-budget'),
        $linkSponsor = $mod.find('.dfa-link-sponsor'),
        $linkDonate = $mod.find('.dfa-link-donate'),
        $linkMember = $mod.find('.dfa-link-member'),
        $selectIssue = $mod.find('.dfa-select[name="sponsor_issue"]'),
        $tableBudget = $formDonate.find('.dfa-table-budget'),
        $inputTableBudget = $mod.find('.dfa-table-budget input[type="number"]'),
        $priceArrows = $mod.find('#dfa-arrow-control'),
        $rangeSlider = $mod.find('.dfa-range-slider'),
        $sponsorStepButtons = $mod.find('.dfa-step-button'),
        $sponsorSelectState = $mod.find('.dfa-select.select-states'),
        $sponsorSelectCountry = $mod.find('.dfa-select.select-countries'),
        $priceOptions = $mod.find('.dfa-price-option'),
        $header = $mod.find('.dfa-header-text.donate'),
        isConversation = false,
        paymentData = {};

      // Detect 'Conversation' page
      if ($mod.parents('.dfa-conversation').length) {
        isConversation = true;
        paymentData.conversation = 'yes';
        changeToConversation();
      }

      function getStripeKey() {
        if (window.location.hash.search('#test:') === 0) {
          paymentData.test = window.location.hash.split(':')[1];
          return 'pk_test_6xSjbhgmCXE8kJ9160XcERqN';
        }

        return 'pk_live_ZOomKa0jZ1trH7YcyUBtoJiR';
      }

      var handler = global.StripeCheckout.configure({
        key: getStripeKey(),
        image: 'https://data4america.org/img/logo-256.png',
        token: function(token) {

          $formDonate.hide();
          $modLoading.show();
          goToTop();

          // ASSIGN DATA
          paymentData.token = token.id;
          paymentData.email = token.email;
          paymentData.name = token.card.name;
          paymentData.address = token.card.address_line1;
          paymentData.state = token.card.address_state;
          paymentData.zip = token.card.address_zip;
          paymentData.city = token.card.address_city;
          paymentData.country = token.card.address_country;

          $.ajax({
            type: "POST",
            url: "https://dev.data4america.org/donate/status.php",
            data: paymentData,
            dataType: 'json',
            success: function(data) {
              if (data.status === 0) {
                $modLoading.hide();
                $formDonate.show();
                showErrorOnForm(data.message);
                return;
              }

              $formPersonalInfo.find('input[name="donationId"]').val(data.id);
              $formPersonalInfo.find('input[name="amount"]').val(paymentData.amount / 100);
              $formPersonalInfo.find('input[name="email"]').val(paymentData.email);
              $formPersonalInfo.find('input[name="name"]').val(paymentData.name);
              $formPersonalInfo.find('input[name="address"]').val(paymentData.address);
              $formPersonalInfo.find('input[name="city"]').val(paymentData.city);
              $formPersonalInfo.find('input[name="zip"]').val(paymentData.zip);
              $formPersonalInfo.find('select[name="state"]').find('option').removeAttr('selected');
              $formPersonalInfo.find('select[name="state"]').find('option[value="' + paymentData.state + '"]').prop('selected', true);
              $formPersonalInfo.find('input[name="anon"]').val(paymentData.anon);

              $modLoading.hide();
              $formPersonalInfo.show();
              goToTop();

              if ($modal.length) {
                $modal.modal('refresh');
              }
            }
          });
        }
      });

      function checkMonthly() {
        if ($(this).is(':checked')) {
          $amount.find('.postinput').html('Monthly');
          $formPersonalInfo.find('input[name="donationType"]').val('monthly');
        } else {
          $amount.find('.postinput').html('One Time');
          $formPersonalInfo.find('input[name="donationType"]').val('onetime');
        }
      }

      function checkChooseDonation() {
        if ($(this).is(':checked')) {
          $formDonate.find('.dfa-field.choose-donation-table').show();
        } else {
          $formDonate.find('.dfa-field.choose-donation-table').hide();
        }
      }

      function showErrorOnForm(message) {
        $formDonate.find('.error-message').show();
        $formDonate.find('.error-message .text').html(message);
      }

      function sponsorPolicy() {
        showHeader('sponsor');

        $('.dfa-field-sponsor:not(.sub_issue)').show();
        $('.dfa-field-member').hide();
        $('.dfa-field.monthly-check').hide();
        $('.dfa-field.price-options').hide();
        $('.dfa-field.anon-check').hide();
        $('.dfa-field.choose-donation-table').hide();
        $('.dfa-field.choose-donation').hide();
        $('.dfa-field.donation-input').hide();
        $priceArrows.show();
        $secCheque.hide();
        $memberCheque.hide();

        $amount.find('.postinput').html('One Time');
        $input.attr('type', 'text');
        $input.val('25,000');
        $input.attr('readonly', 'readonly');
        $formPersonalInfo.find('input[name="donationType"]').val('sponsor');

        $linkSponsor.hide();
        $linkDonate.show();
        $linkMember.show();

        goToTop();
      }

      function becomeMember() {
        showHeader('member');

        $('.dfa-field-member').show();
        $('.dfa-field-sponsor').hide();
        $('.dfa-field.price-options').hide();
        $('.dfa-field.monthly-check').hide();
        $('.dfa-field.anon-check').hide();
        $('.dfa-field.choose-donation-table').hide();
        $('.dfa-field.choose-donation').hide();
        $('.dfa-field.donation-input').show();
        $priceArrows.hide();
        $secCheque.hide();

        $amount.find('.postinput').html('Yearly');
        $input.attr('type', 'text');
        $input.val('500');
        $input.attr('readonly', 'readonly');
        $formPersonalInfo.find('input[name="donationType"]').val('member');

        $linkSponsor.show();
        $linkDonate.show();
        $linkMember.hide();

        goToTop();
      }

      function justDonate() {
        $('.dfa-field-sponsor').hide();
        $('.dfa-field-member').hide();
        $('.dfa-field.monthly-check').show();
        $('.dfa-field.anon-check').show();
        $('.dfa-field.choose-donation').show();
        $('.dfa-field.price-options').show();
        $('.dfa-field.donation-input').show();
        $priceArrows.hide();
        $secCheque.hide();
        $memberCheque.hide();

        $input.val('');
        $input.removeAttr('readonly');
        $input.attr('type', 'number');

        $checkMonthly.prop('checked', true);

        checkMonthly.apply($checkMonthly[0]);

        showHeader('donate');

        $($priceOptions[1]).trigger('click');

        $linkSponsor.show();
        $linkMember.show();
        $linkDonate.hide();

        goToTop();
      }

      function onDataSubmit() {
        $formPersonalInfo.hide();
        $modLoading.show();
        goToTop();

        var fields = {};

        if ($formPersonalInfo.find('#dfa-send-newsletters').is(':checked')) {
          $formPersonalInfo.find('input[name="sendNewsletters"]').val("yes");
        } else {
          $formPersonalInfo.find('input[name="sendNewsletters"]').val("no");
        }

        $formPersonalInfo.find('input, select').each(function() {
          if ($(this).hasClass('dfa-select')) {
            fields[$(this).attr('name')] = $(this).find('option:selected').val();
          } else {
            fields[$(this).attr('name')] = $(this).val();
          }
        });

        paymentData.id = fields.donationId;
        paymentData.name = fields.name;
        paymentData.email = fields.email;
        paymentData.address = fields.address;
        paymentData.state = fields.state;
        paymentData.zip = fields.zip;
        paymentData.city = fields.city;
        paymentData.to = fields.donateto;
        paymentData.fb = fields.fb;
        paymentData.tw = fields.tw;
        paymentData.lkn = fields.li;
        paymentData.nws = fields.sendNewsletters;
        paymentData.tss = fields.tshirt;

        if (fields.address2.length > 0) {
          paymentData.address += ', ' + fields.address2;
        }

        $.ajax({
          type: "POST",
          url: "https://dev.data4america.org/donate/submit.php",
          data: paymentData,
          dataType: 'json',
          success: function(data) {
            console.log(data);

            $modLoading.hide();
            if ($modal.length) {
              $modal.modal('refresh');
            }

            goToThankYou();
            goToTop();
          }
        });
      }

      function onTypeInput() {
        if ($(this).val().length > 0) {
          $input.removeClass('red');
        } else {
          $input.addClass('red');
        }
      }

      function goToDonateForm() {
        $modLearnMore.hide();
        $modCheque.hide();
        $formDonate.show();
        $formPersonalInfo.hide();

        var type = $formPersonalInfo.find('input[name="donationType"]').val();
        if (type == 'onetime' || type == 'monthly') {
          justDonate();

          if (isConversation) {
            changeToConversation();
          }
        } else if (type == 'sponsor') {
          sponsorPolicy();
        } else if (type == 'member') {
          becomeMember();
        }
      }

      function changeToConversation() {
        $header.html('Pay for your invite-admission to Conversation One.<br><br>Up to $40 will be tax-deductible from the Silicon Valley Community Foundation, our fiscal sponsor.');

        if (window.location.pathname.search("conversationonepaymenttest") >= 0) {
          $amount.find('input').val(1).attr('readonly', true);
        } else {
          $amount.find('input').val(75).attr('readonly', true);
        }

        $mod.find('.dfa-field.price-options').hide();
        $mod.find('.dfa-field.anon-check').hide();
        $mod.find('.dfa-field.action-buttons .btnCheque').hide();
        $mod.find('.dfa-link-sponsor.dfa-donate-scroll').hide();
      }

      function goToCheque() {
        var type = $formPersonalInfo.find('input[name="donationType"]').val();
        if (type === 'sponsor') {
          if ($secCheque.css('display') == 'none') {
            $secCheque.show();
          } else {
            $secCheque.hide();
          }
        } else if (type === 'member') {
          $modCheque.find('h1').html('Become a Member by Check');
          $modCheque.show();
        } else {
          $modCheque.find('h1').html('Donate by Check');
          $modCheque.show();
        }
      }

      function learnMore() {
        $('#dfa-supporters').show();
        $('html, body').animate({
          scrollTop: $('#dfa-supporters').offset().top - 65
        });
      }

      function scrollUp(scrollTo) {
        $('body').scrollTop($mod.offset().top - 60);
      }


      function showBudget() {
        $modBudget.show();
        $modCheque.hide();
      }

      function giveByCreditCard(e) {
        if ($input.val().length == 0) {
          return;
        }

        // ASSIGN DATA
        paymentData.amount = parseFloat( $input.val().replace(/,/gi,'') ) * 100;
        paymentData.type = $formPersonalInfo.find('input[name="donationType"]').val();
        paymentData.anon = $formDonate.find('.dfa-anon').is(':checked') ? 'yes' : 'no';
        assignSponsorData();

        var desc = '$' + numberWithCommas(paymentData.amount / 100) +
          (paymentData.type == 'monthly' ? ' Monthly Donation' : ' Donation');

        var buttonText = 'Give {{amount}}' +
          (paymentData.type == 'monthly' ? ' Monthly' : '');

        // Open Checkout with further options
        handler.open({
            name: 'Data4America',
            description: desc,
            amount: paymentData.amount,
            panelLabel: buttonText,
            allowRememberMe: false,
            address: true
        });

        e.preventDefault();
      }

      function giveByCheque() {
        var type = $formPersonalInfo.find('input[name="donationType"]').val();
        console.log(type);
        if (type === 'sponsor') {
          if ($secCheque.css('display') == 'none') {
            $secCheque.show();
          } else {
            $secCheque.hide();
          }
        } else if (type === 'member') {
          if ($memberCheque.css('display') == 'none') {
            $memberCheque.show();
          } else {
            $memberCheque.hide();
          }
        } else {
          $formDonate.hide();
          $modCheque.show();
          $modBudget.hide();
        }
      }

      function assignSponsorData() {
          paymentData.issue = "";
          paymentData.loc = "";

          if (paymentData.type != "sponsor") {
            return;
          }

          var $option = $selectIssue.find('option:selected');
          var issueName = $option.parent('optgroup').attr('label');
          var issue = $option.val();
          if (issue === 'Write in your own') {
            issue = $formDonate.find('input[name="write_in"]').val();
          }
          paymentData.issue = issueName + ':' + issue;

          var $form = null;
          var state = "";
          var country = "";
          var loc = "";

          var $sponsorLoc = $('.dfa-sponsor-step.step1 .dfa-step-button.selected');
          var step = $sponsorLoc.attr('data-step');
          if (step === 'city') {
            $form = $('.dfa-sponsor-step-form.city');
            state = $form.find('input[name="state"]').val();
            country = $form.find('input[name="country"]').val();

            loc = $form.find('input[name="city"]').val() +
              (country.length ? ', ' + country : '') +
              (state.length ? ', ' + state : '');
          } else if (step === 'state') {
            $form = $('.dfa-sponsor-step-form.state');
            country = $form.find('input[name="country"]').val();

            loc = $form.find('input[name="state"]').val() +
              (country.length ? ', ' + country : '');
          } else if (step === 'country') {
            $form = $('.dfa-sponsor-step-form.country');
            loc = $form.find('select option:selected').val();
          }

          paymentData.loc = loc;
      }

      function goToTop() {
        if ($modal.length) {
          $modal.parents('.ui.dimmer.modals').scrollTop(0);
        } else {
          $(window).scrollTop($mod.offset().top);
        }
      }

      function showHeader(headerType) {
        $('.dfa-header-text').hide();
        $('.dfa-header-text.' + headerType).show();
      }

      function calculateBudget() {
        var total = 0;
        $tableBudget.find('input[type="number"]').each(function() {
          var num = parseInt($(this).val());
          if (isNaN(num)) {
            num = 0;
          }
          total += num;
        });

        var $num = $('.dfa-budget-total .num');
        $num.html(total + '%');
        if (total === 100) {
          $num.removeClass('red');
        } else {
          $num.addClass('red');
        }
      }

      function goToThankYou() {
        $modThankYou.show();

        var type = paymentData.type,
            email = paymentData.email,
            amount = paymentData.amount / 100;

        $modThankYou.find('.email-text').html(email);
        $modThankYou.find('.amount').html('$' + numberWithCommas(amount));

        $modThankYou.find('.thankyou-' + type).show();

        if (paymentData.anon === 'yes') {
          $modThankYou.find('.thankyou-' + type + ' .anon').html('anonymous');
        }

        if ($modal.length) {
          $modal.find('.icon.close').show();
        }
      }

      function resetForm() {
        $modThankYou.find('.thankyou-monthly, .thankyou-onetime, .thankyou-member, .thankyou-sponsor').hide();
        $modThankYou.hide();

        $('.thankyou-video').html('');

        $formDonate.show();
        justDonate();
        $(window).scrollTop(0);

        if ($modal.length) {
          $modal.parents('.ui.dimmer.modals').scrollTop(0);
        }
      }

      function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      }

      function populateIssues() {
        var options = '<option value="">Choose your Issue</option>';
        sponsorOptions.forEach(function(item) {
          options += '<optgroup label="' + item.name + '">';
          item.options.forEach(function(option) {
            options += '<option value="' + option +'">' + option + '</option>';
          });
          options += '<option>Write in your own</option>';
          options += '</optgroup>';
        });
        $selectIssue.html(options);
      }

      function onIssueSelect() {
        var $option = $(this).find('option:selected');
        var issueName = $option.parent('optgroup').attr('label');
        var value = $option.val();
        $writein = $(this).next('.write_in');

        if (value === 'Write in your own') {
          $writein.show();
          $writein.find('h3').html(issueName + ':');
          $writein.find('.dfa-input-text input').focus();
        } else {
          $writein.hide();
        }
      }

      function onSponsorSelectState() {
        showStep3();
      }

      function onSponsorSelectCountry() {
        showStep3();
      }

      function updateSponsorPrice() {
        var amount = parseFloat( $input.val().replace(/,/gi,'') );

        if ($(this).hasClass('up')) {
          amount = amount + 500;
        } else {
          if (amount == 10000) {
            return;
          } else {
            amount = amount - 500;
          }
        }

        $input.val( numberWithCommas(amount) );
      }

      function selectPrice() {
        $priceOptions.removeClass('selected');
        $(this).addClass('selected');

        $input.val( $(this).attr('data-value') );
        $input.focus();
      }

      function onInputAdded() {
        $priceOptions.removeClass('selected');

        $('.dfa-price-option[data-value="' + $input.val() + '"]').addClass('selected');
      }

      function openStep() {
        var action = $(this).attr('data-step');
        var $step2 = $('.dfa-sponsor-step.step2');
        var $step3 = $('.dfa-sponsor-step.step3');
        var $step4 = $('.dfa-sponsor-step.step4');
        var $step2Forms = $step2.find('.dfa-sponsor-step-form');

        $(this).parent().find('.dfa-button').removeClass('selected');
        $(this).addClass('selected');

        $step2.show();
        $step2Forms.hide();

        switch(action) {
          case 'city':
            $step2.find('.dfa-sponsor-step-form.city').show();
            $step2.find('.dfa-sponsor-step-form.city input:eq(0)').focus();
            break;
          case 'state':
            $step2.find('.dfa-sponsor-step-form.state').show();
            $step2.find('.dfa-sponsor-step-form.state input:eq(0)').focus();
            break;
          case 'country':
            $step2.find('.dfa-sponsor-step-form.country').show();
            $step2.find('.dfa-sponsor-step-form.country .dfa-button.selected').trigger('click');
            break;
        }
      }

      $selectIssue.on('change', onIssueSelect);
      $priceArrows.find('.arrow').on('click', updateSponsorPrice);
      $sponsorSelectState.on('change', onSponsorSelectState);
      $sponsorSelectCountry.on('change', onSponsorSelectCountry);

      $checkMonthly.on('change', checkMonthly);
      $checkChooseDonation.on('change', checkChooseDonation);

      $linkSponsor.on('click', sponsorPolicy);
      $linkDonate.on('click', justDonate);
      $linkLearnMore.on('click', learnMore);
      $linkBudget.on('click', showBudget);
      $linkMember.on('click', becomeMember);

      $rangeSlider.find('.input-range').on('input', function(){
        var amount = numberWithCommas($(this).val());
        $(this).parents('tr').find('h1 .amount').html('$' + amount);
        $input.val(amount);
      });

      $btnCreditCard.on('click', giveByCreditCard);
      $btnCheque.on('click', giveByCheque);
      $btnBack.on('click', goToDonateForm);
      $btnInfoBack.on('click', goToDonateForm);
      $btnBackCheque.on('click', goToCheque);
      $btnDonateAgain.on('click', resetForm);
      $priceOptions.on('click', selectPrice);
      $donateScroll.on('click', scrollUp);

      $sponsorStepButtons.on('click', openStep);

      $input.on('input', onInputAdded);

      $inputTableBudget.on('input', calculateBudget);

      $btnProceed.on('click', onDataSubmit);

      $mod.find('.ui.button.sms').click(function() {
        var text = 'Help us bring data science to government. http://data4america.org/donate';
        prefillSms(null, text);
      });

      /*
      if (window.location.hash.length) {
        var price = parseInt(window.location.hash.replace('#', '')),
            $option = $priceOptions.filter('[data-value="' + price + '"]');

        if ($option.length) {
          $option.trigger('click');
        } else {
          $input.val(price);
          $input.trigger('input');
        }
      } else {
        //$($priceOptions[1]).trigger('click');
      }
      */

      populateIssues();

      // Close Checkout on page navigation
      $(global).on('popstate', function() {
        handler.close();
      });
    }

    var sponsorOptions = [
      { name: 'Criminal Justice', options: [ 'Criminal justice reform', 'Drug policy', 'Death penalty', 'Gun control', 'Legalize Sex work', 'Background checks for gun purchases' ] },
      { name: 'Culture and Society', options: [ 'Race and Gender', 'Government and Religion', 'Abortion', 'Arts', 'Civil Rights', 'Religious Freedom Act', 'Gay marriage', 'Police voilence and Race', 'Wage and Race', 'Wage and Gender', 'Voting oppertunities by race/gender/class' ] },
      { name: 'Domestic Policy', options: [ 'Immigration', 'Border security', 'Birthright citizenship', 'Temporary amnesty', 'NSA Surveillance', 'Campaign finance', 'Net Neutrality', 'Affirmative action', 'Patriot Act', 'Gerrymandering', 'Confederate flag'] },
      {
        name: 'Economic Affairs',
        options: [ 'Housing policy', 'Infastructure', 'Budget', 'Taxes', 'Equal Pay', 'Welfare', 'Corporate income tax', 'Labor unions', 'Wall Street Reform', 'Minimum Wage', 'Labor unions', 'Farm subsidies', 'Property taxes', 'Land value taxes', 'Trans-Pacific Partnership', 'Pension reform', 'Capital gain taxes', 'Carried interest taxes', 'Tax incentives for companies to have comprehensive cybersecurity plans in place', 'Limitless H1-B Visas for high-skilled workers']
      },
      { name: 'Education', options: [ 'Education', 'Elementary education', 'Secondary education', 'Higher education', 'In-State Tuition', 'Common Core', 'Student Loans', 'Skills-based education', 'Technology education', 'Universal access to education for children from birth to age five' ] },
      { name: 'Environment', options: [ 'Environment', 'Food policy', 'Air quality', 'Global warming', 'Environment and Climate Policy', '50% reduction of C02 emissions by 2030' ] },
      { name: 'Government Operations', options: [ 'Federal spending', 'Term limits for Congress', 'Campaign finance reform', 'Government privatization' ] },
      { name: 'Health', options: [ 'Health insurance', 'Medicare/Medicade', 'Immigration health', 'Euthanasia', 'Mandates for birth control', 'Drug Legalization', 'Patient Protection and Affordable Care Act (Obamacare)' ] },
      { name: 'Social Welfare', options: [ 'Safety Net Programs', 'Social Security', 'Welfare', 'Welfare drug tests', 'Basic Income proposal', 'Basic Jobs proposal' ] },
      { name: 'Foreign Affairs', options: [ 'Foreign Affairs', 'Military', 'Military spending', 'Open data', 'Technology', 'War on ISIS', 'Support of Israel', 'Deal with Iran', 'United Nations membership', 'Drone policy', 'NSA Surveillance' ] },
      { name: 'Other', options: [] },
    ];

    var usStates =  {
      "AL": "Alabama", "AK": "Alaska", "AS": "American Samoa", "AZ": "Arizona",
      "AR": "Arkansas", "CA": "California", "CO": "Colorado",
      "CT": "Connecticut", "DE": "Delaware", "DC": "District Of Columbia",
      "FM": "Federated States Of Micronesia", "FL": "Florida", "GA": "Georgia",
      "GU": "Guam", "HI": "Hawaii",
      "ID": "Idaho", "IL": "Illinois", "IN": "Indiana", "IA": "Iowa",
      "KS": "Kansas", "KY": "Kentucky", "LA": "Louisiana", "ME": "Maine",
      "MH": "Marshall Islands", "MD": "Maryland", "MA": "Massachusetts", "MI": "Michigan",
      "MN": "Minnesota", "MS": "Mississippi", "MO": "Missouri", "MT": "Montana",
      "NE": "Nebraska", "NV": "Nevada", "NH": "New Hampshire", "NJ": "New Jersey",
      "NM": "New Mexico", "NY": "New York", "NC": "North Carolina", "ND": "North Dakota",
      "MP": "Northern Mariana Islands", "OH": "Ohio", "OK": "Oklahoma", "OR": "Oregon",
      "PW": "Palau", "PA": "Pennsylvania", "PR": "Puerto Rico", "RI": "Rhode Island",
      "SC": "South Carolina", "SD": "South Dakota", "TN": "Tennessee", "TX": "Texas",
      "UT": "Utah", "VT": "Vermont", "VI": "Virgin Islands", "VA": "Virginia",
      "WA": "Washington", "WV": "West Virginia", "WI": "Wisconsin", "WY": "Wyoming"
    };

    var countries = [
      "United States", "----------------", "Afghanistan","Albania","Algeria","Andorra",
      "Angola","Anguilla","Antigua &amp; Barbuda","Argentina",
      "Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas",
      "Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize",
      "Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina",
      "Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria",
      "Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde",
      "Cayman Islands","Chad","Chile","China","Colombia","Congo",
      "Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cruise Ship",
      "Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica",
      "Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea",
      "Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji",
      "Finland","France","French Polynesia","French West Indies","Gabon",
      "Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland",
      "Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau",
      "Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India",
      "Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy",
      "Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait",
      "Kyrgyz Republic","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya",
      "Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar",
      "Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius",
      "Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco",
      "Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles",
      "New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman",
      "Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru",
      "Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion",
      "Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa",
      "San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles",
      "Sierra Leone","Singapore","Slovakia","Slovenia","South Africa",
      "South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia",
      "St Vincent","St. Lucia","Sudan","Suriname","Swaziland","Sweden",
      "Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand",
      "Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia",
      "Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine",
      "United Arab Emirates","United Kingdom","Uruguay","Uzbekistan",
      "Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"
    ];

    function populateStates() {
      var $selects = $('.select-states');

      var options = '<option value="">Choose State</option>';
      for (var key in usStates) {
        options += '<option value="' + key + '">' + usStates[key] + '</option>';
      }

      $selects.append(options);
    }

    function populateCountries() {
      var $selects = $('.select-countries');

      var options = '';
      countries.forEach(function(item) {
        options += '<option>' + item + '</option>';
      });

      $selects.append(options);
    }

    function prefillSms(num, value) {
      var ua = navigator.userAgent.toLowerCase();
      var url;

      if (!num) {
        num = "";
      }

      if (ua.indexOf("iphone") > -1 || ua.indexOf("ipad") > -1) {
        url = "sms:" + num + ";body=" + encodeURIComponent(value);
      } else {
        url = "sms:" + num + "?body=" + encodeURIComponent(value);
      }

      location.href = url;
    }

    populateCountries();
    populateStates();

    $('.dfa-donate').each(function() {
      if (!$(this).hasClass('init')) {
        $(this).addClass('init');
        init($(this));
      }
    });

})(window, jQuery);
