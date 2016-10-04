(function () {
    var quiz;
    $(document).ready(function () {
        return quiz.init();
    });
    quiz = {
        init: function () {
            return this.bind_events();
        },
        bind_events: function () {
            return $(document).on('click', '.btn-check', function (e) {
                return quiz.check();
            });
        },
        check: function () {
            var correct, i, incorrect;
            i = 1;
            correct = 0;
            incorrect = 0;
            $('.question').each(function () {
                var checked_count, correct_checked, correct_count, val;
                val = $('input:radio[name=\'question-' + i + '\']:checked').val();
                correct_count = 0;
                correct_checked = 0;
                checked_count = 0;
                $('input:checkbox[name=\'question-' + i + '\']').each(function () {
                    if ($(this).attr('value') === 'true') {
                        correct_count++;
                        if ($(this).is(':checked')) {
                            correct_checked++;
                        }
                    }
                    if ($(this).is(':checked')) {
                        return checked_count++;
                    }
                });
                if (correct_count > 0 && correct_count === correct_checked && checked_count === correct_count) {
                    val = 'true';
                }
                $(this).removeClass('success error');
                if (val === 'true') {
                    $(this).addClass('success');
                    correct++;
                } else {
                    $(this).addClass('error');
                    incorrect++;
                }
                return i++;
            });
            return $('.result').html('You got <strong>' + correct + ' answers correct and </strong> and <strong>' + incorrect + ' wrong</strong>.').show();
        }
    };
}.call(this));