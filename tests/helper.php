<?php
// This file is part of Moodle - http://moodle.org/
//
// Moodle is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Moodle is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Moodle.  If not, see <http://www.gnu.org/licenses/>.

/**
 * Test helpers for the essayannotate question type.
 *
 * @package    qtype_essayannotate
 * @copyright  2013 The Open University
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */


defined('MOODLE_INTERNAL') || die();


/**
 * Test helper class for the essayannotate question type.
 *
 * @copyright  2013 The Open University
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */
class qtype_essayannotate_test_helper extends question_test_helper {
    public function get_test_questions() {
        return array('editor', 'editorfilepicker', 'plain', 'monospaced', 'responsetemplate', 'noinline');
    }

    /**
     * Helper method to reduce duplication.
     * @return qtype_essayannotate_question
     */
    protected function initialise_essayannotate_question() {
        question_bank::load_question_definition_classes('essayannotate');
        $q = new qtype_essayannotate_question();
        test_question_maker::initialise_a_question($q);
        $q->name = 'essayannotate new question (HTML editor)';
        $q->questiontext = 'Please write a story about a frog.';
        $q->generalfeedback = 'I hope your story had a beginning, a middle and an end.';
        $q->responseformat = 'editor';
        $q->responserequired = 1;
        $q->responsefieldlines = 10;
        $q->minwordlimit = null;
        $q->maxwordlimit = null;
        $q->attachments = 0;
        $q->attachmentsrequired = 0;
        $q->maxbytes = 0;
        $q->filetypeslist = null;
        $q->graderinfo = '';
        $q->graderinfoformat = FORMAT_HTML;
        $q->qtype = question_bank::get_qtype('essayannotate');

        return $q;
    }

    /**
     * Makes an essayannotate question using the HTML editor as input.
     * @return qtype_essayannotate_question
     */
    public function make_essayannotate_question_editor() {
        return $this->initialise_essayannotate_question();
    }

    /**
     * Make the data what would be received from the editing form for an essayannotate
     * question using the HTML editor allowing embedded files as input, and up
     * to three attachments.
     *
     * @return stdClass the data that would be returned by $form->get_gata();
     */
    public function get_essayannotate_question_form_data_editor() {
        $fromform = new stdClass();

        $fromform->name = 'essayannotate new question (HTML editor)';
        $fromform->questiontext = array('text' => 'Please write a story about a frog.', 'format' => FORMAT_HTML);
        $fromform->defaultmark = 1.0;
        $fromform->generalfeedback = array('text' => 'I hope your story had a beginning, a middle and an end.', 'format' => FORMAT_HTML);
        $fromform->responseformat = 'editor';
        $fromform->responserequired = 1;
        $fromform->responsefieldlines = 10;
        $fromform->attachments = 0;
        $fromform->attachmentsrequired = 0;
        $fromform->maxbytes = 0;
        $fromform->filetypeslist = ''; // Although once saved in the DB, this becomes null, the form returns '' here.
        $fromform->graderinfo = array('text' => '', 'format' => FORMAT_HTML);
        $fromform->responsetemplate = array('text' => '', 'format' => FORMAT_HTML);
        $fromform->status = \core_question\local\bank\question_version_status::QUESTION_STATUS_READY;

        return $fromform;
    }

    /**
     * Makes an essayannotate question using the HTML editor allowing embedded files as
     * input, and up to three attachments.
     * @return qtype_essayannotate_question
     */
    public function make_essayannotate_question_editorfilepicker() {
        $q = $this->initialise_essayannotate_question();
        $q->responseformat = 'editorfilepicker';
        $q->attachments = 3;
        return $q;
    }

    /**
     * Makes an essayannotate question using the HTML editor allowing embedded files as
     * input, and up to two attachments, two needed.
     * @return qtype_essayannotate_question
     */
    public function make_essayannotate_question_editorfilepickertworequired() {
        $q = $this->initialise_essayannotate_question();
        $q->responseformat = 'editorfilepicker';
        $q->attachments = 2;
        $q->attachmentsrequired = 2;
        return $q;
    }

    /**
     * Make the data what would be received from the editing form for an essayannotate
     * question using the HTML editor allowing embedded files as input, and up
     * to three attachments.
     *
     * @return stdClass the data that would be returned by $form->get_gata();
     */
    public function get_essayannotate_question_form_data_editorfilepicker() {
        $fromform = new stdClass();

        $fromform->name = 'essayannotate new question with filepicker and attachments';
        $fromform->questiontext = array('text' => 'Please write a story about a frog.', 'format' => FORMAT_HTML);
        $fromform->defaultmark = 1.0;
        $fromform->generalfeedback = array('text' => 'I hope your story had a beginning, a middle and an end.', 'format' => FORMAT_HTML);
        $fromform->responseformat = 'editorfilepicker';
        $fromform->responserequired = 1;
        $fromform->responsefieldlines = 10;
        $fromform->attachments = 3;
        $fromform->attachmentsrequired = 0;
        $fromform->maxbytes = 0;
        $fromform->filetypeslist = ''; // Although once saved in the DB, this becomes null, the form returns '' here.
        $fromform->graderinfo = array('text' => '', 'format' => FORMAT_HTML);
        $fromform->responsetemplate = array('text' => '', 'format' => FORMAT_HTML);
        $fromform->status = \core_question\local\bank\question_version_status::QUESTION_STATUS_READY;

        return $fromform;
    }

    /**
     * Makes an essayannotate question using plain text input.
     * @return qtype_essayannotate_question
     */
    public function make_essayannotate_question_plain() {
        $q = $this->initialise_essayannotate_question();
        $q->responseformat = 'plain';
        return $q;
    }

    /**
     * Make the data what would be received from the editing form for an essayannotate
     * question using the HTML editor allowing embedded files as input, and up
     * to three attachments.
     *
     * @return stdClass the data that would be returned by $form->get_gata();
     */
    public function get_essayannotate_question_form_data_plain() {
        $fromform = new stdClass();

        $fromform->name = 'essayannotate new question with filepicker and attachments';
        $fromform->questiontext = array('text' => 'Please write a story about a frog.', 'format' => FORMAT_HTML);
        $fromform->defaultmark = 1.0;
        $fromform->generalfeedback = array('text' => 'I hope your story had a beginning, a middle and an end.', 'format' => FORMAT_HTML);
        $fromform->responseformat = 'plain';
        $fromform->responserequired = 1;
        $fromform->responsefieldlines = 10;
        $fromform->attachments = 0;
        $fromform->attachmentsrequired = 0;
        $fromform->maxbytes = 0;
        $fromform->filetypeslist = ''; // Although once saved in the DB, this becomes null, the form returns '' here.
        $fromform->graderinfo = array('text' => '', 'format' => FORMAT_HTML);
        $fromform->responsetemplate = array('text' => '', 'format' => FORMAT_HTML);
        $fromform->status = \core_question\local\bank\question_version_status::QUESTION_STATUS_READY;

        return $fromform;
    }

    /**
     * Makes an essayannotate question using monospaced input.
     * @return qtype_essayannotate_question
     */
    public function make_essayannotate_question_monospaced() {
        $q = $this->initialise_essayannotate_question();
        $q->responseformat = 'monospaced';
        return $q;
    }

    public function make_essayannotate_question_responsetemplate() {
        $q = $this->initialise_essayannotate_question();
        $q->responsetemplate = 'Once upon a time';
        $q->responsetemplateformat = FORMAT_HTML;
        return $q;
    }

    /**
     * Makes an essayannotate question without an online text editor.
     * @return qtype_essayannotate_question
     */
    public function make_essayannotate_question_noinline() {
        $q = $this->initialise_essayannotate_question();
        $q->responseformat = 'noinline';
        $q->attachments = 3;
        $q->attachmentsrequired = 1;
        $q->filetypeslist = '';
        $q->maxbytes = 0;
        return $q;
    }

    /**
     * Creates an empty draft area for attachments.
     * @return int The draft area's itemid.
     */
    protected function make_attachment_draft_area() {
        $draftid = 0;
        $contextid = 0;

        $component = 'question';
        $filearea = 'response_attachments';

        // Create an empty file area.
        file_prepare_draft_area($draftid, $contextid, $component, $filearea, null);
        return $draftid;
    }

    /**
     * Creates an attachment in the provided attachment draft area.
     * @param int $draftid The itemid for the draft area in which the file should be created.
     * @param string $name The filename for the file to be created.
     * @param string $contents The contents of the file to be created.
     */
    protected function make_attachment($draftid, $name, $contents) {
        global $USER;

        $fs = get_file_storage();
        $usercontext = context_user::instance($USER->id);

        // Create the file in the provided draft area.
        $fileinfo = array(
            'contextid' => $usercontext->id,
            'component' => 'user',
            'filearea'  => 'draft',
            'itemid'    => $draftid,
            'filepath'  => '/',
            'filename'  => $name,
        );
        $fs->create_file_from_string($fileinfo, $contents);
    }

    /**
     * Generates a draft file area that contains the provided number of attachments. You should ensure
     * that a user is logged in with setUser before you run this function.
     *
     * @param int $attachments The number of attachments to generate.
     * @return int The itemid of the generated draft file area.
     */
    public function make_attachments($attachments) {
        $draftid = $this->make_attachment_draft_area();

        // Create the relevant amount of dummy attachments in the given draft area.
        for ($i = 0; $i < $attachments; ++$i) {
            $this->make_attachment($draftid, $i, $i);
        }

        return $draftid;
    }

    /**
     * Generates a question_file_saver that contains the provided number of attachments. You should ensure
     * that a user is logged in with setUser before you run this function.
     *
     * @param int $:attachments The number of attachments to generate.
     * @return question_file_saver a question_file_saver that contains the given amount of dummy files, for use in testing.
     */
    public function make_attachments_saver($attachments) {
        return new question_file_saver($this->make_attachments($attachments), 'question', 'response_attachments');
    }

    public static function make_an_essayannotate_question() {
        question_bank::load_question_definition_classes('essayannotate');
        $essay = new qtype_essayannotate_question();
        test_question_maker::initialise_a_question($essay);
        $essay->name = 'Essay annotate question';
        $essay->questiontext = 'Write an essay annotate.';
        $essay->generalfeedback = 'I hope you wrote an interesting essay annotate.';
        $essay->penalty = 0;
        $essay->qtype = question_bank::get_qtype('essayannotate');

        $essay->responseformat = 'editor';
        $essay->responserequired = 1;
        $essay->responsefieldlines = 15;
        $essay->attachments = 0;
        $essay->attachmentsrequired = 0;
        $essay->responsetemplate = '';
        $essay->responsetemplateformat = FORMAT_MOODLE;
        $essay->graderinfo = '';
        $essay->graderinfoformat = FORMAT_MOODLE;

        return $essay;
    }
}
