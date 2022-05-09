import {Component, ViewChild, AfterViewInit} from '@angular/core';
import {DayPilot, DayPilotSchedulerComponent} from 'daypilot-pro-angular';
import {DataService} from "../../data.service";

@Component({
  selector: 'timesheet-component',
  templateUrl:'./timesheet.component.html',
  styleUrls: ['./timesheet.component.css']
})
export class TimesheetComponent implements AfterViewInit {

  @ViewChild('timesheet')
  timesheet!: DayPilotSchedulerComponent;

  events: any[] = [];
  
  config: DayPilot.SchedulerConfig = {
    locale: "en-us",
    rowHeaderColumns: [{"title":"Date"},{"title":"Total"}],
    onBeforeRowHeaderRender: (args) => {
      args.row.columns[1].html = args.row.events.totalDuration().toString("h:mm");
    },
    cellWidthSpec: "Fixed",
    cellWidth: 40,
    crosshairType: "Header",
    timeHeaders: [{"groupBy":"Hour"},{"groupBy":"Cell","format":"mm"}],
    scale: "CellDuration",
    cellDuration: 15,
    viewType: "Days",
    days: DayPilot.Date.today().daysInMonth(),
    startDate: DayPilot.Date.today().firstDayOfMonth(),
    showNonBusiness: true,
    businessWeekends: false,
    floatingEvents: true,
    eventHeight: 30,
    eventMovingStartEndEnabled: false,
    eventResizingStartEndEnabled: false,
    timeRangeSelectingStartEndEnabled: false,
    groupConcurrentEvents: false,
    eventStackingLineHeight: 100,
    allowEventOverlap: true,
    timeRangeSelectedHandling: "Enabled",
    onTimeRangeSelected: async (args) => {
      const dp = args.control;
      const modal = await DayPilot.Modal.prompt("Create a new event:", "Event 1");
      dp.clearSelection();
      if (modal.canceled) { return; }
      dp.events.add({
        start: args.start,
        end: args.end,
        id: DayPilot.guid(),
        resource: args.resource,
        text: modal.result
      });
    },
    eventMoveHandling: "Update",
    onEventMoved: (args) => {
      args.control.message("Event moved: " + args.e.text());
    },
    eventResizeHandling: "Update",
    onEventResized: (args) => {
      args.control.message("Event resized: " + args.e.text());
    },
    eventDeleteHandling: "Update",
    onEventDeleted: (args) => {
      args.control.message("Event deleted: " + args.e.text());
    },
    eventClickHandling: "Disabled",
    eventHoverHandling: "Disabled",
  };

  constructor(private ds: DataService) {
  }

  ngAfterViewInit(): void {
    const from = this.timesheet.control.visibleStart();
    const to = this.timesheet.control.visibleEnd();
    this.ds.getEvents(from, to).subscribe(result => {
      this.events = result;
    });
  }

}

