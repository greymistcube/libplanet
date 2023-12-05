window.BENCHMARK_DATA = {
  "lastUpdate": 1701750012045,
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
          "id": "c2b95f304e5a3fa2aba37b65f6ef6201faaf5ff3",
          "message": "Remove internal tracking of amounts for TotalUpdatedFungibleAssets",
          "timestamp": "2023-12-05T13:02:48+09:00",
          "tree_id": "066ad56efd90c1392e78ba1aef0fda604ff04734",
          "url": "https://github.com/greymistcube/libplanet/commit/c2b95f304e5a3fa2aba37b65f6ef6201faaf5ff3"
        },
        "date": 1701749745394,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 918539.1304347826,
            "unit": "ns",
            "range": "± 88830.11933085787"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1770057.142857143,
            "unit": "ns",
            "range": "± 88521.24845804779"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1344575.7894736843,
            "unit": "ns",
            "range": "± 128063.88010027725"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5416287.5,
            "unit": "ns",
            "range": "± 254676.9275909836"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34136.76470588235,
            "unit": "ns",
            "range": "± 1647.7849819668322"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4900285.714285715,
            "unit": "ns",
            "range": "± 27008.854876840698"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13555653.333333334,
            "unit": "ns",
            "range": "± 208116.29944633864"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 31400185.714285713,
            "unit": "ns",
            "range": "± 182560.00849938823"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 64828935.71428572,
            "unit": "ns",
            "range": "± 704942.0070060786"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 131120620,
            "unit": "ns",
            "range": "± 1424532.9997681947"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3283262.734375,
            "unit": "ns",
            "range": "± 6022.037405532865"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1054621.5104166667,
            "unit": "ns",
            "range": "± 3597.4000881477905"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 729534.4876802885,
            "unit": "ns",
            "range": "± 1314.5299882616523"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1931854.799107143,
            "unit": "ns",
            "range": "± 4314.903170243945"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 593444.7614397322,
            "unit": "ns",
            "range": "± 2145.034812454304"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 561891.38671875,
            "unit": "ns",
            "range": "± 1165.1112273099122"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2130057.1428571427,
            "unit": "ns",
            "range": "± 32576.99061393359"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2283065.4545454546,
            "unit": "ns",
            "range": "± 96063.90276342834"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2733651.515151515,
            "unit": "ns",
            "range": "± 68090.22103619268"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2527818.867924528,
            "unit": "ns",
            "range": "± 85728.44213562644"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6260268.571428572,
            "unit": "ns",
            "range": "± 299830.86031132797"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 165080.95238095237,
            "unit": "ns",
            "range": "± 6322.919322256165"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 158439.34426229508,
            "unit": "ns",
            "range": "± 6154.924280295808"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 140672.72727272726,
            "unit": "ns",
            "range": "± 4266.605261158507"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2688214.285714286,
            "unit": "ns",
            "range": "± 29022.613388736856"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2554135,
            "unit": "ns",
            "range": "± 56333.698197718026"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9857.777777777777,
            "unit": "ns",
            "range": "± 909.3741245367768"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 51793.47826086957,
            "unit": "ns",
            "range": "± 4600.592516732679"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43861.818181818184,
            "unit": "ns",
            "range": "± 1860.2559470546487"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 53836.458333333336,
            "unit": "ns",
            "range": "± 11384.912636714173"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2229.4736842105262,
            "unit": "ns",
            "range": "± 372.7053722618952"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9571.27659574468,
            "unit": "ns",
            "range": "± 1286.6245193742243"
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
          "id": "e5bf020cc3829922946245ebdcf24dc6738258b1",
          "message": "Changelog",
          "timestamp": "2023-12-05T13:07:28+09:00",
          "tree_id": "c1644d4dc792be582a8456158f5713a5b9e1bed9",
          "url": "https://github.com/greymistcube/libplanet/commit/e5bf020cc3829922946245ebdcf24dc6738258b1"
        },
        "date": 1701749990427,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 947011.224489796,
            "unit": "ns",
            "range": "± 84360.15315136808"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1665234.7826086956,
            "unit": "ns",
            "range": "± 64108.0345714822"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1329695.9595959596,
            "unit": "ns",
            "range": "± 112711.31801198293"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5412453.333333333,
            "unit": "ns",
            "range": "± 273540.2096699977"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34082.35294117647,
            "unit": "ns",
            "range": "± 1636.9284283509344"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4904773.333333333,
            "unit": "ns",
            "range": "± 22624.11692567616"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13518805,
            "unit": "ns",
            "range": "± 301100.6397150994"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 33173183.333333332,
            "unit": "ns",
            "range": "± 691739.8901236182"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 66659500,
            "unit": "ns",
            "range": "± 1160825.614441229"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 130913330.76923077,
            "unit": "ns",
            "range": "± 898395.5257240686"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3239140.1822916665,
            "unit": "ns",
            "range": "± 19890.5841450295"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1073741.045673077,
            "unit": "ns",
            "range": "± 895.9503470459774"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 737352.4739583334,
            "unit": "ns",
            "range": "± 2188.3174460874093"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1938515.8072916667,
            "unit": "ns",
            "range": "± 5889.664778581527"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 624615.4817708334,
            "unit": "ns",
            "range": "± 2301.4408742386336"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 585606.6105769231,
            "unit": "ns",
            "range": "± 1341.9145651562505"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2112887.5,
            "unit": "ns",
            "range": "± 40943.16182221397"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2389342.222222222,
            "unit": "ns",
            "range": "± 90381.1185251576"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2816115,
            "unit": "ns",
            "range": "± 56200.83605858733"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2722005.882352941,
            "unit": "ns",
            "range": "± 86905.72719271631"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5963250,
            "unit": "ns",
            "range": "± 119204.62973391595"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 175995,
            "unit": "ns",
            "range": "± 9149.1287542599"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 168003.75,
            "unit": "ns",
            "range": "± 8706.122445611174"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 140357.14285714287,
            "unit": "ns",
            "range": "± 3766.8562952688217"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2738485.714285714,
            "unit": "ns",
            "range": "± 31481.786117418073"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2491250,
            "unit": "ns",
            "range": "± 35334.527676959915"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10145.263157894737,
            "unit": "ns",
            "range": "± 1725.2054099749812"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 50586,
            "unit": "ns",
            "range": "± 2531.8853139988873"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44563.82978723404,
            "unit": "ns",
            "range": "± 2593.2854183523"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 58437.37373737374,
            "unit": "ns",
            "range": "± 13195.489225091556"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2425.773195876289,
            "unit": "ns",
            "range": "± 540.1154102202494"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10310.63829787234,
            "unit": "ns",
            "range": "± 1130.9400490947933"
          }
        ]
      }
    ]
  }
}