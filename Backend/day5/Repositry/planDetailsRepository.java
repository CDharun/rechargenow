package com.rechargenow.rechargenow.Repositry;

import org.springframework.data.jpa.repository.JpaRepository;

import com.rechargenow.rechargenow.Model.planData;
import java.util.*;

public interface planDetailsRepository extends JpaRepository<planData, Long>{
    public planData findByOperator(String operator);  
    public List<planData> findByOperatorAndPlanData(String operator, String planData);
    public List<planData> findByOperatorAndPlanDataAndPlanType(String operator, String planData, String planType); 
    // public List<planData> findByOperatorandPlanData(String operator, String planData);
    public planData findByPlanType(String planType);
    
}