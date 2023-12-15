window.BENCHMARK_DATA = {
  "lastUpdate": 1702614856093,
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
          "id": "6bf89675478468b8f5eaeae9d3c6c1d91e28114f",
          "message": "Removed IBlockPolicy as generic type parameter",
          "timestamp": "2023-12-15T12:41:57+09:00",
          "tree_id": "eaa67ccbf19f077892993e50773ef00e76df5b9c",
          "url": "https://github.com/greymistcube/libplanet/commit/6bf89675478468b8f5eaeae9d3c6c1d91e28114f"
        },
        "date": 1702612446461,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 925450,
            "unit": "ns",
            "range": "± 93786.28617354887"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1660998.3606557378,
            "unit": "ns",
            "range": "± 67642.07145409647"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1343322,
            "unit": "ns",
            "range": "± 143698.21532248997"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5469234.042553191,
            "unit": "ns",
            "range": "± 310804.1476291494"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34700,
            "unit": "ns",
            "range": "± 1494.7179727901241"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5021586.666666667,
            "unit": "ns",
            "range": "± 43428.21444088865"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 12694706.666666666,
            "unit": "ns",
            "range": "± 129681.11144907212"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32445780,
            "unit": "ns",
            "range": "± 288571.02913692297"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 63364373.333333336,
            "unit": "ns",
            "range": "± 440319.20315455995"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 128024740,
            "unit": "ns",
            "range": "± 805695.3924583232"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3254387.6116071427,
            "unit": "ns",
            "range": "± 5298.478811355922"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1040400.6911057692,
            "unit": "ns",
            "range": "± 2205.6872025419907"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 731706.6545758928,
            "unit": "ns",
            "range": "± 1267.6013934437576"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1899197.9166666667,
            "unit": "ns",
            "range": "± 4728.074099636786"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 617265.2762276785,
            "unit": "ns",
            "range": "± 1205.4759709338086"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 549564.4466145834,
            "unit": "ns",
            "range": "± 993.4811583814503"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2141012.5,
            "unit": "ns",
            "range": "± 83561.93174029794"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2259221.8181818184,
            "unit": "ns",
            "range": "± 83601.57869081157"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2741300,
            "unit": "ns",
            "range": "± 68284.76470567274"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2570710.5263157897,
            "unit": "ns",
            "range": "± 104767.87042281774"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6341337.5,
            "unit": "ns",
            "range": "± 292058.5489790464"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 167824.2857142857,
            "unit": "ns",
            "range": "± 7174.258245035485"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 162038.57142857142,
            "unit": "ns",
            "range": "± 7783.954005426298"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 145162.5,
            "unit": "ns",
            "range": "± 4077.6930543091753"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2697926.3157894737,
            "unit": "ns",
            "range": "± 58408.207586351185"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2548800,
            "unit": "ns",
            "range": "± 39612.11935759055"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10060.63829787234,
            "unit": "ns",
            "range": "± 1015.1770951077848"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 50843.333333333336,
            "unit": "ns",
            "range": "± 3886.0756901613386"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43787.878787878784,
            "unit": "ns",
            "range": "± 2046.273547509089"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 53115.15151515151,
            "unit": "ns",
            "range": "± 11932.517428048719"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2214.5833333333335,
            "unit": "ns",
            "range": "± 426.979394712171"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9646.59090909091,
            "unit": "ns",
            "range": "± 933.5322690660831"
          }
        ]
      },
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
          "id": "3907c1f970f4913947829abd10a24c748831318f",
          "message": "Removed IBlockPolicy as generic type parameter",
          "timestamp": "2023-12-15T12:42:26+09:00",
          "tree_id": "c34e511f264aa20568ee1980320ad50122fca47b",
          "url": "https://github.com/greymistcube/libplanet/commit/3907c1f970f4913947829abd10a24c748831318f"
        },
        "date": 1702612461800,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 951327.8350515463,
            "unit": "ns",
            "range": "± 98184.15174883966"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1738627.8481012657,
            "unit": "ns",
            "range": "± 89690.01021568372"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1335275.7894736843,
            "unit": "ns",
            "range": "± 106269.92700824719"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5361183.636363637,
            "unit": "ns",
            "range": "± 226329.67904400348"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34472.97297297297,
            "unit": "ns",
            "range": "± 1628.0332951811636"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5151950,
            "unit": "ns",
            "range": "± 27818.236567300337"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13108386.666666666,
            "unit": "ns",
            "range": "± 205922.9775102008"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32769307.692307692,
            "unit": "ns",
            "range": "± 254893.3844490622"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 65952136.666666664,
            "unit": "ns",
            "range": "± 511484.1498265705"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 133557800,
            "unit": "ns",
            "range": "± 1332840.1581370728"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3371724.375,
            "unit": "ns",
            "range": "± 9075.72492722343"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1040169.5612980769,
            "unit": "ns",
            "range": "± 2096.7643164269607"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 731894.62890625,
            "unit": "ns",
            "range": "± 2013.5212524964006"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1934545.2566964286,
            "unit": "ns",
            "range": "± 4989.100771290633"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 614403.0078125,
            "unit": "ns",
            "range": "± 1387.5142641451212"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 549301.7803485577,
            "unit": "ns",
            "range": "± 912.0330566488096"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2205631.25,
            "unit": "ns",
            "range": "± 86052.6191232941"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2297287.037037037,
            "unit": "ns",
            "range": "± 91084.72739510237"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2738133.3333333335,
            "unit": "ns",
            "range": "± 34997.013478023415"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2695291.304347826,
            "unit": "ns",
            "range": "± 67866.27166744557"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6282811.111111111,
            "unit": "ns",
            "range": "± 238489.6197686049"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 174557.97101449277,
            "unit": "ns",
            "range": "± 8347.778954292917"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 162283.05084745763,
            "unit": "ns",
            "range": "± 6345.352699155525"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 140925.92592592593,
            "unit": "ns",
            "range": "± 3161.133267162828"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2754700,
            "unit": "ns",
            "range": "± 21799.858856282674"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2559923.076923077,
            "unit": "ns",
            "range": "± 25820.442606784578"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10814.893617021276,
            "unit": "ns",
            "range": "± 1826.5636957953393"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 54435.95505617977,
            "unit": "ns",
            "range": "± 4146.692197375552"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44129.31034482759,
            "unit": "ns",
            "range": "± 1928.185095276253"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 58184.04255319149,
            "unit": "ns",
            "range": "± 11784.629165031436"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2482.4742268041236,
            "unit": "ns",
            "range": "± 534.24602425567"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11089.583333333334,
            "unit": "ns",
            "range": "± 1748.3513537445356"
          }
        ]
      },
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
          "id": "2657dfea46bdbab71605c42bdc2f2a9cbdf5bf0a",
          "message": "Changelog",
          "timestamp": "2023-12-15T12:44:45+09:00",
          "tree_id": "a16ebc9995f04b409192c4ea0a1408bac46d1c7c",
          "url": "https://github.com/greymistcube/libplanet/commit/2657dfea46bdbab71605c42bdc2f2a9cbdf5bf0a"
        },
        "date": 1702612583202,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 933970.1030927835,
            "unit": "ns",
            "range": "± 93133.42709627729"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1712181.3253012048,
            "unit": "ns",
            "range": "± 86062.0818571571"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1357490.7216494845,
            "unit": "ns",
            "range": "± 160803.60244362935"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5322694.736842105,
            "unit": "ns",
            "range": "± 180726.08951396577"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 33422.22222222222,
            "unit": "ns",
            "range": "± 1773.6967046256807"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5149821.428571428,
            "unit": "ns",
            "range": "± 31088.785476721063"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13104207.142857144,
            "unit": "ns",
            "range": "± 116881.86319979223"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32494306.666666668,
            "unit": "ns",
            "range": "± 321832.2865510337"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 65846980.76923077,
            "unit": "ns",
            "range": "± 622903.5296959653"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 127477326.66666667,
            "unit": "ns",
            "range": "± 1337101.6060690305"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3329444.308035714,
            "unit": "ns",
            "range": "± 9198.689726227487"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1034034.4791666666,
            "unit": "ns",
            "range": "± 2374.5272309178995"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 735112.6878004808,
            "unit": "ns",
            "range": "± 873.6829613743789"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1936207.728794643,
            "unit": "ns",
            "range": "± 3105.869268547202"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 625535.6096540178,
            "unit": "ns",
            "range": "± 1126.0230367732163"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 560985.7491629465,
            "unit": "ns",
            "range": "± 472.37616187223534"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2077889.7435897435,
            "unit": "ns",
            "range": "± 64352.2043742657"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2279341.8604651163,
            "unit": "ns",
            "range": "± 80626.24301753694"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2755583.870967742,
            "unit": "ns",
            "range": "± 83861.71989958308"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2562068.918918919,
            "unit": "ns",
            "range": "± 127876.86706485305"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6426130.4878048785,
            "unit": "ns",
            "range": "± 340042.9572314682"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 172893.67088607594,
            "unit": "ns",
            "range": "± 8977.783716173939"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 163231.64556962025,
            "unit": "ns",
            "range": "± 7664.730150698393"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 140271.42857142858,
            "unit": "ns",
            "range": "± 4150.802291589608"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2730433.3333333335,
            "unit": "ns",
            "range": "± 54606.02207686276"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2472553.846153846,
            "unit": "ns",
            "range": "± 32495.887313746218"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11109.473684210527,
            "unit": "ns",
            "range": "± 1554.1347516955443"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 53835.416666666664,
            "unit": "ns",
            "range": "± 5381.918639817405"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43622.22222222222,
            "unit": "ns",
            "range": "± 1843.3630736736718"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 59082.82828282828,
            "unit": "ns",
            "range": "± 16290.519594349524"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3021.6494845360826,
            "unit": "ns",
            "range": "± 696.9018947162552"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9804.444444444445,
            "unit": "ns",
            "range": "± 1114.249998284341"
          }
        ]
      },
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
          "id": "fa996be4b8fb4b7a3531cfea193f039be9aae52b",
          "message": "Changelog",
          "timestamp": "2023-12-15T13:23:20+09:00",
          "tree_id": "b23d2714bf667fd76fec094515c62070d08df729",
          "url": "https://github.com/greymistcube/libplanet/commit/fa996be4b8fb4b7a3531cfea193f039be9aae52b"
        },
        "date": 1702614836298,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1013250,
            "unit": "ns",
            "range": "± 125869.64313072343"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1662525.8620689656,
            "unit": "ns",
            "range": "± 58001.75605431399"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1316250.5154639175,
            "unit": "ns",
            "range": "± 115816.69615865637"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5165158.064516129,
            "unit": "ns",
            "range": "± 154559.27616763208"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34426.470588235294,
            "unit": "ns",
            "range": "± 1641.6789410206532"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4929823.076923077,
            "unit": "ns",
            "range": "± 37727.80040072471"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13192878.57142857,
            "unit": "ns",
            "range": "± 193889.22859981927"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32697633.333333332,
            "unit": "ns",
            "range": "± 559492.5515483608"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 64677688.23529412,
            "unit": "ns",
            "range": "± 1320740.5658769407"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 130542864.28571428,
            "unit": "ns",
            "range": "± 1013545.7734015863"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3382227.83203125,
            "unit": "ns",
            "range": "± 5623.922304740751"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1038295.1869419643,
            "unit": "ns",
            "range": "± 3148.3001758090904"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 732994.6219308035,
            "unit": "ns",
            "range": "± 2686.962803487619"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1916182.9947916667,
            "unit": "ns",
            "range": "± 3771.8649568656174"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 617349.3815104166,
            "unit": "ns",
            "range": "± 2702.855440155748"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 556019.53125,
            "unit": "ns",
            "range": "± 477.2885623608026"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2135630.303030303,
            "unit": "ns",
            "range": "± 66986.5867396623"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2224497.8723404254,
            "unit": "ns",
            "range": "± 81126.83705794788"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2725496.296296296,
            "unit": "ns",
            "range": "± 74553.64863114698"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2508300,
            "unit": "ns",
            "range": "± 80156.46223168785"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5998844.736842105,
            "unit": "ns",
            "range": "± 206797.50860720032"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 167549.29577464788,
            "unit": "ns",
            "range": "± 7677.832157571501"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 171191.22807017545,
            "unit": "ns",
            "range": "± 6712.575636758069"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 143367.56756756757,
            "unit": "ns",
            "range": "± 4608.750978908014"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2752766.6666666665,
            "unit": "ns",
            "range": "± 39076.62192350282"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2472021.4285714286,
            "unit": "ns",
            "range": "± 29354.921709509435"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11575.257731958764,
            "unit": "ns",
            "range": "± 1532.293415102224"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 51187.20930232558,
            "unit": "ns",
            "range": "± 3254.5369784214236"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 45106.593406593405,
            "unit": "ns",
            "range": "± 2582.0664505521845"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 60251.51515151515,
            "unit": "ns",
            "range": "± 13938.907254013586"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2153.191489361702,
            "unit": "ns",
            "range": "± 444.73070930368397"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10494.845360824742,
            "unit": "ns",
            "range": "± 2202.0052950861923"
          }
        ]
      }
    ]
  }
}