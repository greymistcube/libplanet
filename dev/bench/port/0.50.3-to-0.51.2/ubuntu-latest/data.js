window.BENCHMARK_DATA = {
  "lastUpdate": 1678789757406,
  "repoUrl": "https://github.com/greymistcube/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "distinct": true,
          "id": "17498ea0633120215dc070704dc36a44751c9944",
          "message": "Port 0.50.3 to 0.51.3",
          "timestamp": "2023-03-14T19:16:05+09:00",
          "tree_id": "e520cb9ddb43668a02f62c28849c7c9ab8719ac1",
          "url": "https://github.com/greymistcube/libplanet/commit/17498ea0633120215dc070704dc36a44751c9944"
        },
        "date": 1678789750379,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 192236.2894736842,
            "unit": "ns",
            "range": "± 6514.978537675523"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 189372.80357142858,
            "unit": "ns",
            "range": "± 8130.06966630029"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 163589.7741935484,
            "unit": "ns",
            "range": "± 4999.980584693488"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 11246635.266666668,
            "unit": "ns",
            "range": "± 75125.86016761346"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8984971.5,
            "unit": "ns",
            "range": "± 66874.14817142604"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17439.926315789475,
            "unit": "ns",
            "range": "± 1431.3762403090914"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 49906.234042553195,
            "unit": "ns",
            "range": "± 5981.85712239996"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 38031.25,
            "unit": "ns",
            "range": "± 726.3780007681951"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 79168.0731707317,
            "unit": "ns",
            "range": "± 6132.991167550024"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4629.886597938144,
            "unit": "ns",
            "range": "± 472.62299713691505"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16958.032258064515,
            "unit": "ns",
            "range": "± 1336.4928264061366"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3292925.533333333,
            "unit": "ns",
            "range": "± 44515.228642834234"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5067152.142857143,
            "unit": "ns",
            "range": "± 56782.823514560405"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 23632593.57142857,
            "unit": "ns",
            "range": "± 325396.9503910603"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6098978.955555555,
            "unit": "ns",
            "range": "± 231550.9927916876"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 26540764.733333334,
            "unit": "ns",
            "range": "± 327041.1619622797"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5922254.5078125,
            "unit": "ns",
            "range": "± 18196.14936690661"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1924054.664341518,
            "unit": "ns",
            "range": "± 3672.482009922324"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1369257.7889229911,
            "unit": "ns",
            "range": "± 3686.1081646702355"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2559215.925480769,
            "unit": "ns",
            "range": "± 1648.3367890896484"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 814461.7664620535,
            "unit": "ns",
            "range": "± 756.2945692451553"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 744892.1028395433,
            "unit": "ns",
            "range": "± 1927.860129640356"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 7769508.571428572,
            "unit": "ns",
            "range": "± 23810.968014807753"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 19753175.8,
            "unit": "ns",
            "range": "± 150209.4940956035"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 50201604.06666667,
            "unit": "ns",
            "range": "± 597621.4704640707"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 101002936.73333333,
            "unit": "ns",
            "range": "± 1206966.9184554236"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 200545652.73333332,
            "unit": "ns",
            "range": "± 2860945.104649048"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45535.98611111111,
            "unit": "ns",
            "range": "± 2173.035032696323"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1345606.9333333333,
            "unit": "ns",
            "range": "± 74706.78926471609"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2471922.65,
            "unit": "ns",
            "range": "± 55050.38688355376"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2080168.9318181819,
            "unit": "ns",
            "range": "± 104455.1181689842"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5101918.863636363,
            "unit": "ns",
            "range": "± 190536.90437673577"
          }
        ]
      }
    ]
  }
}