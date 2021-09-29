import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { members } from 'src/app/interfaces/members';
import { MembersService } from 'src/app/services/members.service';




@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {
  listMembers : members[] = [];
  displayedColumns: string[] = ['id','cin','name', 'cv','type','actions'];
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  
  constructor(private _membersService : MembersService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.loadUsers();
  }
  loadUsers(){
    this.listMembers = this._membersService.getMembers();
    this.dataSource = new MatTableDataSource(this.listMembers);
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  
  delMember(index : number){
    this._membersService.delMember(index);
    this.loadUsers();
      this._snackBar.open("The Memeber is delted successfully ! ","dismiss",{
        duration:2000,
        horizontalPosition: 'center',
        verticalPosition: 'bottom'
      })
    
  }

}
