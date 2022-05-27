package com.example.demo;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class LoginController {
    
    private String lastname = "Please login";

    @RequestMapping("/login")
    public String lognin(Model model,@AuthenticationPrincipal OAuth2User oauth2User){
        model.addAttribute("name", lastname);
        if (oauth2User == null){
            return "login";
        }else{
            return "redirect:/";
        }
        
    }

}