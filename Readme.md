# Atlaschain GeoJSON Helper

Helper script to save the GeoJSON into Blockchain in corresponding format.

## What is GeoJSON
> GeoJSON is a format for encoding a variety of geographic data structures.
In 2015, the Internet Engineering Task Force (IETF), in conjunction with the original specification
authors, formed a [GeoJSON WG][1] to standardize GeoJSON. [RFC 7946][2] was published in August 2016 and is
the new standard specification of the GeoJSON format, replacing the [2008 GeoJSON specification][3]

[1]: https://datatracker.ietf.org/wg/geojson/charter/
[2]: https://tools.ietf.org/html/rfc7946
[3]: http://geojson.org/geojson-spec.html


## Instructions to run

1. Set the Accounts as environment variables.
2. Fill in account details in `set_accounts.sh`
3. Run `. ./set_accounts.sh` to load addresses as environment variables.
4. Install node dependencies by runnung `yarn install` or `npm install`
5. Run the script `yarn start`
