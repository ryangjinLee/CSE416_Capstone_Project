package cse416.spring.controller;

import cse416.spring.enums.StateName;
import cse416.spring.helperclasses.MGGGParams;
import cse416.spring.helperclasses.Server;
import cse416.spring.models.districting.Districting;
import cse416.spring.models.job.Job;
import cse416.spring.models.job.JobSummary;
import cse416.spring.models.precinct.Incumbent;
import cse416.spring.models.state.State;
import cse416.spring.service.StateService;
import org.json.JSONObject;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.*;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/states")
public class StateController {
    Server server;

    public StateController(Server server) {
        this.server = server;
    }

    public JSONObject assembleCountyJSONByState(Map<String, String> countyGeometry) {
        return new JSONObject(countyGeometry);
    }


    @GetMapping(value = "getOutlines", produces = "application/json")
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<String> getAllCounties() {
        try {
            String body = assembleCountyJSONByState(server.getAllStatesCountyGeometry()).toString();
            return new ResponseEntity<>(body, HttpStatus.OK);
        }
        catch (Exception ex) {
            return new ResponseEntity<>("", HttpStatus.EXPECTATION_FAILED);
        }
    }



    @GetMapping("/{stateID}/loadIncumbents")
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<ArrayList<Incumbent>> loadIncumbents(@PathVariable("stateID") String state) {
        // MAP THE STATE STRING TO THE ENUM TO BE CALLED HERE (NC -> StateName.NORTH_CAROLINA) can use a switch statement
        // or maybe something cleaner?
        ArrayList<Incumbent> incumbents = StateService.getIncumbents(StateName.NORTH_CAROLINA);
        return new ResponseEntity<>(incumbents, HttpStatus.OK);
    }

//    @GetMapping("/current/jobs")
//    @CrossOrigin(origins = "http://localhost:3000")
//    public ResponseEntity<HashSet> getJobs() {
//        return new ResponseEntity<>(combined, HttpStatus.OK);
//    }

    @GetMapping("/{stateID}/loadJobs")
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<ArrayList<Job>> loadJobs(@PathVariable("stateID") String stateID) {
        ArrayList<Job> jobs = StateService.getJobs(getStateNameFromStateID(stateID));
        // TODO
        /* Get a way for jackson not to send the districting keys, no need for them on the client */
        return new ResponseEntity<>(jobs, HttpStatus.OK);
    }


    @GetMapping("/{stateID}/loadPrecincts")
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<String> loadPrecincts(@PathVariable("stateID") String stateID) {
        // MAP THE STATE STRING TO THE ENUM TO BE CALLED HERE (NC -> StateName.NORTH_CAROLINA) can use a switch statement
        // or maybe something cleaner?
        String precinctsGeoJson = StateService.getPrecincts(getStateNameFromStateID(stateID));
        return new ResponseEntity<>(precinctsGeoJson, HttpStatus.OK);
    }


    @GetMapping("/{stateID}/loadCounties")
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<String> loadCounties(@PathVariable("stateID") String stateID) {
        // MAP THE STATE STRING TO THE ENUM TO BE CALLED HERE (NC -> StateName.NORTH_CAROLINA) can use a switch statement
        // or maybe something cleaner?
        String countiesGeoJson = StateService.getCounties(getStateNameFromStateID(stateID));
        return new ResponseEntity<>(countiesGeoJson, HttpStatus.OK);
    }


    @GetMapping("/test")
    @CrossOrigin
    public ResponseEntity<String> getTest(HttpServletRequest request) {
        System.out.println(request.getSession().getAttribute("entry"));
        return new ResponseEntity<>("Test", HttpStatus.OK);
    }


    private StateName getStateNameFromStateID(String stateID) {
        switch(stateID) {
            case "LA":
                return StateName.LOUISIANA;
            case "TX":
                return StateName.TEXAS;
            default:
                return StateName.NORTH_CAROLINA;
        }
    }

}
