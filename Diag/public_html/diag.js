var data;
var sectionsum = 0;
var globalsum = 0;
var sectionresult;
var forceresult;
var Question11Res;

function ClearQuestion()
{
    $("#noanswer_selected").hide();
    $("#section").empty();
    $("#question").empty();
    $("#question_options").empty();
}

function ClearResult(result)
{
    $("#result").hide();
    $("#result").removeClass(result);
    $("#result_header").empty();
    $("#result_description").empty();
}

function process_result(Result)
{
    if (sectionsum >= Result.Excelente.min && sectionsum <= Result.Excelente.max)
    {
        $("#result_header").html(Result.Excelente.header);
        $("#result_description").html(Result.Excelente.description);
        $("#result").addClass("excelente");
        sectionresult = "excelente";
        globalsum = globalsum + 3;
    } else if (sectionsum >= Result.Bueno.min && sectionsum <= Result.Bueno.max)
    {
        $("#result_header").html(Result.Bueno.header);
        $("#result_description").html(Result.Bueno.description);
        $("#result").addClass("aceptable");
        sectionresult = "aceptable";
        globalsum = globalsum + 2;
    } else if (sectionsum >= Result.Malo.min && sectionsum <= Result.Malo.max)
    {
        $("#result_header").html(Result.Malo.header);
        $("#result_description").html(Result.Malo.description);
        $("#result").addClass("malo");
        sectionresult = "malo";
        globalsum = globalsum + 1;
    }
}

var aStateDefinition = {
    Question0:
            {
                enterState:
                        {
                            init_function: function () {
                                $("#section").html(data.preguntas[0].section);
                                $("#question").html(data.preguntas[0].question);
                                $("#question_options").empty();
                                $.each(data.preguntas[0].possible_answer, function (index, value) {
                                    $("#question_options").append('<input name="selectedanswer" value="' + value.val + '" type="radio">' + value.text + '<br />');
                                });
                            }
                        },
                click:
                        {
                            process_event_if: '$("input[name=selectedanswer]:checked").val() != null',
                            propagate_event_on_refused: 'noAnswer',
                            next_state: 'Question1'
                        },
                exitState:
                        {
                            init_function: function () {
                                var selection = $("input[name=selectedanswer]:checked").val();
                                if (selection == 1)
                                {
                                    sectionsum = sectionsum + 1;

                                }
                                ClearQuestion();
                            }
                        }
            },
    Question1:
            {
                enterState:
                        {
                            init_function: function () {
                                $("#section").html(data.preguntas[1].section);
                                $("#question").html(data.preguntas[1].question);
                                $("#question_options").empty();
                                $.each(data.preguntas[1].possible_answer, function (index, value) {
                                    $("#question_options").append('<input name="selectedanswer" value="' + value.val + '" type="radio">' + value.text + '<br />');
                                });
                            }
                        },
                click:
                        {
                            process_event_if: '$("input[name=selectedanswer]:checked").val() != null',
                            propagate_event_on_refused: 'noAnswer',
                            next_state: 'Question2'
                        },
                exitState:
                        {
                            init_function: function () {
                                var selection = $("input[name=selectedanswer]:checked").val();
                                if (selection == 1)
                                {
                                    sectionsum = sectionsum + 1;

                                }
                                ClearQuestion();
                            }
                        }
            },
    Question2:
            {
                enterState:
                        {
                            init_function: function () {
                                $("#noanswer_selected").hide();
                                $("#section").html(data.preguntas[2].section);
                                $("#question").html(data.preguntas[2].question);
                                $("#question_options").empty();
                                $.each(data.preguntas[2].possible_answer, function (index, value) {
                                    $("#question_options").append('<input name="selectedanswer" value="' + value.val + '" type="radio">' + value.text + '<br />');
                                });
                            }
                        },
                click:
                        {
                            process_event_if: '$("input[name=selectedanswer]:checked").val() != null',
                            propagate_event_on_refused: 'noAnswer',
                            next_state: 'Question3'
                        },
                exitState:
                        {
                            init_function: function () {
                                var selection = $("input[name=selectedanswer]:checked").val();
                                if (selection == 1)
                                {
                                    sectionsum = sectionsum + 1;

                                }
                                ClearQuestion();
                            }
                        }
            },
    Question3:
            {
                enterState:
                        {
                            init_function: function () {
                                $("#noanswer_selected").hide();
                                $("#section").html(data.preguntas[3].section);
                                $("#question").html(data.preguntas[3].question);
                                $("#question_options").empty();
                                $.each(data.preguntas[3].possible_answer, function (index, value) {
                                    $("#question_options").append('<input name="selectedanswer" value="' + value.val + '" type="radio">' + value.text + '<br />');
                                });
                            }
                        },
                click:
                        {
                            process_event_if: '$("input[name=selectedanswer]:checked").val() != null',
                            propagate_event_on_refused: 'noAnswer',
                            next_state: 'Question4'
                        },
                exitState:
                        {
                            init_function: function () {
                                var selection = $("input[name=selectedanswer]:checked").val();
                                if (selection == 1)
                                {
                                    sectionsum = sectionsum + 1;

                                }
                                ClearQuestion();
                            }
                        }
            },
    Question4:
            {
                enterState:
                        {
                            init_function: function () {
                                $("#noanswer_selected").hide();
                                $("#section").html(data.preguntas[4].section);
                                $("#question").html(data.preguntas[4].question);
                                $("#question_options").empty();
                                $.each(data.preguntas[4].possible_answer, function (index, value) {
                                    $("#question_options").append('<input name="selectedanswer" value="' + value.val + '" type="radio">' + value.text + '<br />');
                                });
                            }
                        },
                click:
                        {
                            process_event_if: '$("input[name=selectedanswer]:checked").val() != null',
                            propagate_event_on_refused: 'noAnswer',
                            next_state: 'ResContabilidad'
                        },
                exitState:
                        {
                            init_function: function () {
                                var selection = $("input[name=selectedanswer]:checked").val();
                                if (selection == 1)
                                {
                                    sectionsum = sectionsum + 1;

                                }
                                ClearQuestion();
                            }
                        }
            },
    Question5:
            {
                enterState:
                        {
                            init_function: function () {
                                $("#noanswer_selected").hide();
                                $("#section").html(data.preguntas[5].section);
                                $("#question").html(data.preguntas[5].question);
                                $("#question_options").empty();
                                $.each(data.preguntas[5].possible_answer, function (index, value) {
                                    $("#question_options").append('<input name="selectedanswer" value="' + value.val + '" type="radio">' + value.text + '<br />');
                                });
                            }
                        },
                click:
                        {
                            process_event_if: '$("input[name=selectedanswer]:checked").val() != null',
                            propagate_event_on_refused: 'noAnswer',
                            next_state: 'Question6'
                        },
                exitState:
                        {
                            init_function: function () {
                                var selection = $("input[name=selectedanswer]:checked").val();
                                if (selection == 1)
                                {
                                    sectionsum = sectionsum + 1;

                                }
                                ClearQuestion();
                            }
                        }
            },
    Question6:
            {
                enterState:
                        {
                            init_function: function () {
                                $("#noanswer_selected").hide();
                                $("#section").html(data.preguntas[6].section);
                                $("#question").html(data.preguntas[6].question);
                                $("#question_options").empty();
                                $.each(data.preguntas[6].possible_answer, function (index, value) {
                                    $("#question_options").append('<input name="selectedanswer" value="' + value.val + '" type="radio">' + value.text + '<br />');
                                });
                            }
                        },
                click:
                        {
                            process_event_if: '$("input[name=selectedanswer]:checked").val() != null',
                            propagate_event_on_refused: 'noAnswer',
                            next_state: 'Question7'
                        },
                exitState:
                        {
                            init_function: function () {
                                var selection = $("input[name=selectedanswer]:checked").val();
                                if (selection == 1)
                                {
                                    sectionsum = sectionsum + 1;

                                }
                                ClearQuestion();
                            }
                        }
            },
    Question7:
            {
                enterState:
                        {
                            init_function: function () {
                                $("#noanswer_selected").hide();
                                $("#section").html(data.preguntas[7].section);
                                $("#question").html(data.preguntas[7].question);
                                $("#question_options").empty();
                                $.each(data.preguntas[7].possible_answer, function (index, value) {
                                    $("#question_options").append('<input name="selectedanswer" value="' + value.val + '" type="radio">' + value.text + '<br />');
                                });
                            }
                        },
                click:
                        {
                            process_event_if: '$("input[name=selectedanswer]:checked").val() != null',
                            propagate_event_on_refused: 'noAnswer',
                            next_state: 'ResFacturacion'
                        },
                exitState:
                        {
                            init_function: function () {
                                var selection = $("input[name=selectedanswer]:checked").val();
                                if (selection == 1)
                                {
                                    sectionsum = sectionsum + 1;

                                }
                                ClearQuestion();
                            }
                        }
            },
    Question8:
            {
                enterState:
                        {
                            init_function: function () {
                                $("#noanswer_selected").hide();
                                $("#section").html(data.preguntas[8].section);
                                $("#question").html(data.preguntas[8].question);
                                $("#question_options").empty();
                                $.each(data.preguntas[8].possible_answer, function (index, value) {
                                    $("#question_options").append('<input name="selectedanswer" value="' + value.val + '" type="radio">' + value.text + '<br />');
                                });
                            }
                        },
                click:
                        {
                            process_event_if: '$("input[name=selectedanswer]:checked").val() != null',
                            propagate_event_on_refused: 'noAnswer',
                            init_function: function () {
                                var selection = $("input[name=selectedanswer]:checked").val();
                                if (selection == 0)
                                {
                                    forceresult = 'Aceptable';
                                    this.myUIObject.trigger('jumpToRes');
                                }
                                if (selection == 1)
                                {
                                    this.myUIObject.trigger('jumpToNext');
                                }
                            }
                        },
                jumpToRes:
                        {
                            next_state: 'ResCobranza'
                        },
                jumpToNext:
                        {
                            next_state: 'Question9'
                        },
                exitState:
                        {
                            init_function: function () {
                                var selection = $("input[name=selectedanswer]:checked").val();
                                if (selection == 1)
                                {
                                    sectionsum = sectionsum + 1;
                                }
                                ClearQuestion();
                            }
                        }
            },
    Question9:
            {
                enterState:
                        {
                            init_function: function () {
                                $("#noanswer_selected").hide();
                                $("#section").html(data.preguntas[9].section);
                                $("#question").html(data.preguntas[9].question);
                                $("#question_options").empty();
                                $.each(data.preguntas[9].possible_answer, function (index, value) {
                                    $("#question_options").append('<input name="selectedanswer" value="' + value.val + '" type="radio">' + value.text + '<br />');
                                });
                            }
                        },
                click:
                        {
                            process_event_if: '$("input[name=selectedanswer]:checked").val() != null',
                            propagate_event_on_refused: 'noAnswer',
                            next_state: 'Question10'
                        },
                exitState:
                        {
                            init_function: function () {
                                var selection = $("input[name=selectedanswer]:checked").val();
                                if (selection == 1)
                                {
                                    sectionsum = sectionsum + 1;

                                }
                                ClearQuestion();
                            }
                        }
            },
    Question10:
            {
                enterState:
                        {
                            init_function: function () {
                                $("#noanswer_selected").hide();
                                $("#section").html(data.preguntas[10].section);
                                $("#question").html(data.preguntas[10].question);
                                $("#question_options").empty();
                                $.each(data.preguntas[10].possible_answer, function (index, value) {
                                    $("#question_options").append('<input name="selectedanswer" value="' + value.val + '" type="radio">' + value.text + '<br />');
                                });
                            }
                        },
                click:
                        {
                            process_event_if: '$("input[name=selectedanswer]:checked").val() != null',
                            propagate_event_on_refused: 'noAnswer',
                            next_state: 'ResCobranza'
                        },
                exitState:
                        {
                            init_function: function () {
                                var selection = $("input[name=selectedanswer]:checked").val();
                                if (selection == 1)
                                {
                                    sectionsum = sectionsum + 1;

                                }
                                ClearQuestion();
                            }
                        }
            },
    Question11:
            {
                enterState:
                        {
                            init_function: function () {
                                $("#noanswer_selected").hide();
                                $("#section").html(data.preguntas[11].section);
                                $("#question").html(data.preguntas[11].question);
                                $("#question_options").empty();
                                $.each(data.preguntas[11].possible_answer, function (index, value) {
                                    $("#question_options").append('<input name="selectedanswer" value="' + value.val + '" type="radio">' + value.text + '<br />');
                                });
                            }
                        },
                click:
                        {
                            process_event_if: '$("input[name=selectedanswer]:checked").val() != null',
                            propagate_event_on_refused: 'noAnswer',
                            init_function: function () {
                                var selection = $("input[name=selectedanswer]:checked").val();
                                Question11Res = selection;
                                if (selection == 0)
                                {
                                    forceresult = 'Aceptable';
                                    this.myUIObject.trigger('jumpToRes');
                                }
                                if (selection == 1)
                                {
                                    this.myUIObject.trigger('jumpToNext');
                                }
                            }
                        },
                jumpToRes:
                        {
                            next_state: 'Question15'
                        },
                jumpToNext:
                        {
                            next_state: 'Question12'
                        },
                exitState:
                        {
                            init_function: function () {
                                var selection = $("input[name=selectedanswer]:checked").val();
                                if (selection == 1)
                                {
                                    sectionsum = sectionsum + 1;
                                }
                                ClearQuestion();
                            }
                        }
            },
    Question12:
            {
                enterState:
                        {
                            init_function: function () {
                                $("#noanswer_selected").hide();
                                $("#section").html(data.preguntas[12].section);
                                $("#question").html(data.preguntas[12].question);
                                $("#question_options").empty();
                                $.each(data.preguntas[12].possible_answer, function (index, value) {
                                    $("#question_options").append('<input name="selectedanswer" value="' + value.val + '" type="radio">' + value.text + '<br />');
                                });
                            }
                        },
                click:
                        {
                            process_event_if: '$("input[name=selectedanswer]:checked").val() != null',
                            propagate_event_on_refused: 'noAnswer',
                            init_function: function () {
                                var selection = $("input[name=selectedanswer]:checked").val();
                                if (selection == 0)
                                {
                                    forceresult = 'Malo';
                                    this.myUIObject.trigger('jumpToRes');
                                }
                                if (selection == 1)
                                {
                                    this.myUIObject.trigger('jumpToNext');
                                }
                            }
                        },
                jumpToRes:
                        {
                            next_state: 'ResRH'
                        },
                jumpToNext:
                        {
                            next_state: 'Question13'
                        },
                exitState:
                        {
                            init_function: function () {
                                var selection = $("input[name=selectedanswer]:checked").val();
                                if (selection == 1)
                                {
                                    sectionsum = sectionsum + 1;

                                }
                                ClearQuestion();
                            }
                        }
            },
    Question13:
            {
                enterState:
                        {
                            init_function: function () {
                                $("#noanswer_selected").hide();
                                $("#section").html(data.preguntas[13].section);
                                $("#question").html(data.preguntas[13].question);
                                $("#question_options").empty();
                                $.each(data.preguntas[13].possible_answer, function (index, value) {
                                    $("#question_options").append('<input name="selectedanswer" value="' + value.val + '" type="radio">' + value.text + '<br />');
                                });
                            }
                        },
                click:
                        {
                            process_event_if: '$("input[name=selectedanswer]:checked").val() != null',
                            propagate_event_on_refused: 'noAnswer',
                            next_state: 'Question14'
                        },
                exitState:
                        {
                            init_function: function () {
                                var selection = $("input[name=selectedanswer]:checked").val();
                                if (selection == 1)
                                {
                                    sectionsum = sectionsum + 1;

                                }
                                ClearQuestion();
                            }
                        }
            },
    Question14:
            {
                enterState:
                        {
                            init_function: function () {
                                $("#noanswer_selected").hide();
                                $("#section").html(data.preguntas[14].section);
                                $("#question").html(data.preguntas[14].question);
                                $("#question_options").empty();
                                $.each(data.preguntas[14].possible_answer, function (index, value) {
                                    $("#question_options").append('<input name="selectedanswer" value="' + value.val + '" type="radio">' + value.text + '<br />');
                                });
                            }
                        },
                click:
                        {
                            process_event_if: '$("input[name=selectedanswer]:checked").val() != null',
                            propagate_event_on_refused: 'noAnswer',
                            next_state: 'ResRH'
                        },
                exitState:
                        {
                            init_function: function () {
                                var selection = $("input[name=selectedanswer]:checked").val();
                                if (selection == 1)
                                {
                                    sectionsum = sectionsum + 1;

                                }
                                ClearQuestion();
                            }
                        }
            },
    Question15:
            {
                enterState:
                        {
                            init_function: function () {
                                $("#noanswer_selected").hide();
                                $("#section").html(data.preguntas[15].section);
                                $("#question").html(data.preguntas[15].question);
                                $("#question_options").empty();
                                $.each(data.preguntas[15].possible_answer, function (index, value) {
                                    $("#question_options").append('<input name="selectedanswer" value="' + value.val + '" type="radio">' + value.text + '<br />');
                                });
                            }
                        },
                click:
                        {
                            process_event_if: '$("input[name=selectedanswer]:checked").val() != null',
                            propagate_event_on_refused: 'noAnswer',
                            init_function: function () {
                                var selection = $("input[name=selectedanswer]:checked").val();
                                if (selection == 0)
                                {
                                    forceresult = 'Malo';
                                    this.myUIObject.trigger('jumpToRes');
                                }
                                if (selection == 1)
                                {
                                    this.myUIObject.trigger('jumpToNext');
                                }
                            }
                        },
                jumpToRes:
                        {
                            next_state: 'ResExpClinico'
                        },
                jumpToNext:
                        {
                            next_state: 'Question16'
                        },
                exitState:
                        {
                            init_function: function () {
                                var selection = $("input[name=selectedanswer]:checked").val();
                                if (selection == 1)
                                {
                                    sectionsum = sectionsum + 1;

                                }
                                ClearQuestion();
                            }
                        }
            },
    Question16:
            {
                enterState:
                        {
                            init_function: function () {
                                $("#noanswer_selected").hide();
                                $("#section").html(data.preguntas[16].section);
                                $("#question").html(data.preguntas[16].question);
                                $("#question_options").empty();
                                $.each(data.preguntas[16].possible_answer, function (index, value) {
                                    $("#question_options").append('<input name="selectedanswer" value="' + value.val + '" type="radio">' + value.text + '<br />');
                                });
                            }
                        },
                click:
                        {
                            process_event_if: '$("input[name=selectedanswer]:checked").val() != null',
                            propagate_event_on_refused: 'noAnswer',
                            next_state: 'Question17'
                        },
                exitState:
                        {
                            init_function: function () {
                                var selection = $("input[name=selectedanswer]:checked").val();
                                if (selection == 1)
                                {
                                    sectionsum = sectionsum + 1;

                                }
                                ClearQuestion();
                            }
                        }
            },
    Question17:
            {
                enterState:
                        {
                            init_function: function () {
                                $("#noanswer_selected").hide();
                                $("#section").html(data.preguntas[17].section);
                                $("#question").html(data.preguntas[17].question);
                                $("#question_options").empty();
                                $.each(data.preguntas[17].possible_answer, function (index, value) {
                                    $("#question_options").append('<input name="selectedanswer" value="' + value.val + '" type="radio">' + value.text + '<br />');
                                });
                            }
                        },
                click:
                        {
                            process_event_if: '$("input[name=selectedanswer]:checked").val() != null',
                            propagate_event_on_refused: 'noAnswer',
                            next_state: 'Question18'
                        },
                exitState:
                        {
                            init_function: function () {
                                var selection = $("input[name=selectedanswer]:checked").val();
                                if (selection == 1)
                                {
                                    sectionsum = sectionsum + 1;

                                }
                                ClearQuestion();
                            }
                        }
            },
    Question18:
            {
                enterState:
                        {
                            init_function: function () {
                                $("#noanswer_selected").hide();
                                $("#section").html(data.preguntas[18].section);
                                $("#question").html(data.preguntas[18].question);
                                $("#question_options").empty();
                                $.each(data.preguntas[18].possible_answer, function (index, value) {
                                    $("#question_options").append('<input name="selectedanswer" value="' + value.val + '" type="radio">' + value.text + '<br />');
                                });
                            }
                        },
                click:
                        {
                            process_event_if: '$("input[name=selectedanswer]:checked").val() != null',
                            propagate_event_on_refused: 'noAnswer',
                            next_state: 'ResExpClinico'
                        },
                exitState:
                        {
                            init_function: function () {
                                var selection = $("input[name=selectedanswer]:checked").val();
                                if (selection == 1)
                                {
                                    sectionsum = sectionsum + 1;

                                }
                                ClearQuestion();
                            }
                        }
            },
    Question19:
            {
                enterState:
                        {
                            init_function: function () {
                                $("#noanswer_selected").hide();
                                $("#section").html(data.preguntas[19].section);
                                $("#question").html(data.preguntas[19].question);
                                $("#question_options").empty();
                                $.each(data.preguntas[19].possible_answer, function (index, value) {
                                    $("#question_options").append('<input name="selectedanswer" value="' + value.val + '" type="radio">' + value.text + '<br />');
                                });
                            }
                        },
                click:
                        {
                            process_event_if: '$("input[name=selectedanswer]:checked").val() != null',
                            propagate_event_on_refused: 'noAnswer',
                            next_state: 'ResFinal'
                        },
                exitState:
                        {
                            init_function: function () {
                                var selection = $("input[name=selectedanswer]:checked").val();
                                if (selection == 1)
                                {
                                    sectionsum = sectionsum + 1;
                                }
                                ClearQuestion();
                            }
                        }
            },
    ResContabilidad:
            {
                enterState:
                        {
                            init_function: function () {
                                var Result = data.resultados.Contabilidad;
                                $("#result").show();
                                process_result(Result);
                            }
                        },
                click:
                        {
                            next_state: 'Question5'
                        },
                exitState:
                        {
                            init_function: function () {
                                sectionsum = 0;
                                ClearResult(sectionresult);
                            }
                        }
            },
    ResFacturacion:
            {
                enterState:
                        {
                            init_function: function () {
                                var Result = data.resultados.Facturacion;
                                $("#result").show();
                                process_result(Result);
                            }
                        },
                click:
                        {
                            next_state: 'Question8'
                        },
                exitState:
                        {
                            init_function: function () {
                                sectionsum = 0;
                                ClearResult(sectionresult);
                            }
                        }
            },
    ResCobranza:
            {
                enterState:
                        {
                            init_function: function () {
                                var Result = data.resultados.Cobranza;
                                $("#result").show();
                                if (forceresult == null)
                                {
                                    process_result(Result);
                                } else if (forceresult == 'Aceptable')
                                {
                                    $("#result_header").html(Result.Bueno.header);
                                    $("#result_description").html(Result.Bueno.description);
                                    $("#result").addClass("aceptable");
                                    sectionresult = "aceptable";
                                    globalsum = globalsum + 2;
                                    forceresult = null;
                                }
                            }
                        },
                click:
                        {
                            next_state: 'Question11'
                        },
                exitState:
                        {
                            init_function: function () {
                                sectionsum = 0;
                                ClearResult(sectionresult);
                            }
                        }
            },
    ResRH:
            {
                enterState:
                        {
                            init_function: function () {
                                var Result = data.resultados.RH;
                                $("#result").show();
                                if (forceresult == null)
                                {
                                    process_result(Result);
                                } else if (forceresult == 'Malo')
                                {
                                    $("#result_header").html(Result.Malo.header);
                                    $("#result_description").html(Result.Malo.description);
                                    $("#result").addClass("malo");
                                    sectionresult = "malo";
                                    globalsum = globalsum + 1;
                                    forceresult = null;
                                }
                            }
                        },
                click:
                        {
                            next_state: 'Question15'
                        },
                exitState:
                        {
                            init_function: function () {
                                sectionsum = 0;
                                ClearResult(sectionresult);
                            }
                        }
            },
    ResExpClinico:
            {
                enterState:
                        {
                            init_function: function () {
                                var Result = data.resultados.Clinico;
                                $("#result").show();
                                if (forceresult == null)
                                {
                                    process_result(Result);
                                } else if (forceresult == 'Malo')
                                {
                                    $("#result_header").html(Result.Malo.header);
                                    $("#result_description").html(Result.Malo.description);
                                    $("#result").addClass("malo");
                                    sectionresult = "malo";
                                    globalsum = globalsum + 1;
                                    forceresult = null;
                                }
                            }
                        },
                click:
                        {
                            next_state: 'Question19'
                        },
                exitState:
                        {
                            init_function: function () {
                                sectionsum = 0;
                                ClearResult(sectionresult);
                            }
                        }
            },
    ResFinal:
            {
                enterState:
                        {
                            init_function: function () {
                                var Result = data.resultados.Final;
                                $("#result").show();
                                $("#contactanos").show();
                                $("#submit").val("Enviar");
                                if (Question11Res == 0)
                                {
                                    if (globalsum >= 11 && globalsum <= 12)
                                    {
                                        $("#result_header").html(Result.Excelente.header);
                                        $("#result_description").html(Result.Excelente.description);
                                        $("#result").addClass("excelente");
                                        sectionresult = "excelente";
                                    } else if (globalsum >= 7 && globalsum <= 10)
                                    {
                                        $("#result_header").html(Result.Bueno.header);
                                        $("#result_description").html(Result.Bueno.description);
                                        $("#result").addClass("aceptable");
                                        sectionresult = "aceptable";
                                    } else if (globalsum >= 4 && globalsum <= 6)
                                    {
                                        $("#result_header").html(Result.Malo.header);
                                        $("#result_description").html(Result.Malo.description);
                                        $("#result").addClass("malo");
                                        sectionresult = "malo";
                                    }
                                } else if (Question11Res == 1)
                                {
                                    if (globalsum >= 14 && globalsum <= 15)
                                    {
                                        $("#result_header").html(Result.Excelente.header);
                                        $("#result_description").html(Result.Excelente.description);
                                        $("#result").addClass("excelente");
                                        sectionresult = "excelente";
                                    } else if (globalsum >= 8 && globalsum <= 13)
                                    {
                                        $("#result_header").html(Result.Bueno.header);
                                        $("#result_description").html(Result.Bueno.description);
                                        $("#result").addClass("aceptable");
                                        sectionresult = "aceptable";
                                    } else if (globalsum >= 5 && globalsum <= 7)
                                    {
                                        $("#result_header").html(Result.Malo.header);
                                        $("#result_description").html(Result.Malo.description);
                                        $("#result").addClass("malo");
                                        sectionresult = "malo";
                                    }
                                }
                                if (sectionresult == "excelente")
                                {
                                    $("#ans").val("0");
                                } else if (sectionresult == "aceptable")
                                {
                                    $("#ans").val("1");
                                } else if (sectionresult == "malo")
                                {
                                    $("#ans").val("2");
                                }
                                $("#mailform").show();
                            }
                        },
                click:
                        {
                            init_function: function () {
                                var name = $("#name").val();
                                var email = $("#mail").val();
                                var cel = $("#cel").val();
                                var answ = $("#ans").val();
                                $("#noanswer_selected").empty(); // To empty previous error/success message.
// Checking for blank fields.
                                if (name == '' || email == '' || cel == '') {
                                    alert("Por favor llena todos los campos.");
                                } else {
// Returns successful data submission message when the entered information is stored in database.
                                    $.post("submit_form.php", {
                                        nombre: name,
                                        correo: email,
                                        celular: cel,
                                        answer: answ
                                    }, function (data) {
                                        $("#mail_result").html(data); // Append returned message to message paragraph.
                                        if (data == "Su mensaje ha sido enviado.") {
                                            $("#noanswer_selected").removeClass("noanswer_selected"); // To reset form fields on success.
                                        }
                                    });
                                }
                            }
                        }
            },
    DefaultState:
            {
                start:
                        {
                            next_state: 'Question0'
                        },
                noAnswer:
                        {
                            init_function: function () {
                                $("#noanswer_selected").show();
                            }
                        }
            }

};
$(document).ready(function () {
    $("#noanswer_selected").hide();
    $("#mailform").hide();
    $("#contactanos").hide();
    $.ajax({
        url: 'diag.json',
        async: false,
        dataType: 'json',
        success: function (json) {
            data = json;
        }
    });
    $('#submit').iFSM(aStateDefinition);
    $('#contactanos').click(function() {
        parent.document.location.href="http://grupoaevitas.com/web/index.php/contacto";
    });
});
