@qtype @qtype_essayannotate
Feature: Test importing essayannotate questions
  As a teacher
  In order to reuse essayannotate questions
  I need to import them

  Background:
    Given the following "users" exist:
      | username |
      | teacher  |
    And the following "courses" exist:
      | fullname | shortname | category |
      | Course 1 | C1        | 0        |
    And the following "course enrolments" exist:
      | user    | course | role           |
      | teacher | C1     | editingteacher |

  @javascript @_file_upload
  Scenario: import essayannotate question.
    When I am on the "Course 1" "core_question > course question import" page logged in as teacher
    And I set the field "id_format_xml" to "1"
    And I upload "question/type/essayannotate/tests/fixtures/testquestion.moodle.xml" file to "Import" filemanager
    And I press "id_submitbutton"
    Then I should see "Parsing questions from import file."
    And I should see "Importing 1 questions from file"
    And I should see "Write an essayannotate with 500 words."
    And I press "Continue"
    And I should see "essayannotate-001"
    And I choose "Edit question" action for "essayannotate-001" in the question bank
    And the field "id_maxwordlimit" matches value "20"
