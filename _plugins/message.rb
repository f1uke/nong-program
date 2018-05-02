class AdsInlineTag < Liquid::Tag
  def initialize(tag_name, input, tokens)
    super
    @input = input
  end

  def render(context)
    input_split = split_params(@input)
    type = input_split[0].strip
    text = input_split[1].strip
    output = "<div class=\"message is-#{type}\">"
    output += "<div class=\"message-body\">#{text}</div>"
    output += "</div>"
    return output;
  end

  def split_params(params)
    params.split("|")
  end
end
Liquid::Template.register_tag('message', AdsInlineTag)
