import { Component, OnInit } from '@angular/core';

import { faTwitter,faLinkedin,faGithub } from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  faLinkedin=faLinkedin;
  faGithub=faGithub
  faTwitter=faTwitter
  constructor() { }

  ngOnInit(): void {
  }

}
