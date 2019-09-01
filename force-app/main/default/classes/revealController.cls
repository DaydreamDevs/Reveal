public with sharing class revealController {
    @AuraEnabled(cacheable=true)
    public static contact getGender() {
        return [SELECT Gender__c FROM contact LIMIT 1];
    }
}