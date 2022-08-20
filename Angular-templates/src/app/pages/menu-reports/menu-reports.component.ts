import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilsService } from '../../services/utils.service';

@Component({
  selector: 'app-menu-reports',
  templateUrl: './menu-reports.component.html',
  styleUrls: ['./menu-reports.component.css']
})
export class MenuReportsComponent implements OnInit {
  reports: any[] = [
    {
      titulo: "reporte1",
      descripcion: "",
      imagen: ""
    },
    {
      titulo: "reporte2",
      descripcion: "",
      imagen: ""
    },
    {
      titulo: "reporte3",
      descripcion: "",
      imagen: ""
    },
    {
      titulo: "reporte1",
      descripcion: "",
      imagen: ""
    },
    {
      titulo: "reporte2",
      descripcion: "",
      imagen: ""
    },
    {
      titulo: "reporte1",
      descripcion: "",
      imagen: ""
    },
    {
      titulo: "reporte2",
      descripcion: "",
      imagen: ""
    },
    {
      titulo: "reporte1",
      descripcion: "",
      imagen: ""
    },
    {
      titulo: "reporte2",
      descripcion: "",
      imagen: ""
    },
  ];

  scrollDistance = 1;
  modalScrollThrottle = 50;
  addNewItem(){
    this.reports.push({
      titulo: "scroll Report",
      descripcion: "",
      imagen: ""
    });
  }

  add20(){
    for (let i = 0; i < 20; i++) {
      this.addNewItem();
    }
  }

  constructor(private activatedroute: ActivatedRoute, private utils: UtilsService) {

  }

  onModalScrollDown(ev:any) {
    console.log("scrolled down!!", ev);
    // add another 20 items
    this.add20();
    console.log("limite de scroll");
  }

  ngOnInit(): void {

    this.activatedroute.data.subscribe((data: any) => {
      if (data.title != undefined) {
        console.log(data)
        this.utils.emitEmitterTitle(data.title);
      }
    })
  }

}
