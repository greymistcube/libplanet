window.BENCHMARK_DATA = {
  "lastUpdate": 1701938462831,
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
          "id": "9af94f81a831efe724530498c77692279d504295",
          "message": "Updated to test more elaborate cases",
          "timestamp": "2023-12-07T16:13:39+09:00",
          "tree_id": "0fbdbcb4ef02850f4a42e7bd27f95c5da30d81d1",
          "url": "https://github.com/greymistcube/libplanet/commit/9af94f81a831efe724530498c77692279d504295"
        },
        "date": 1701934571735,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 12110911.602272727,
            "unit": "ns",
            "range": "± 1772006.2591714752"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27100368.927083332,
            "unit": "ns",
            "range": "± 3511901.661895593"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 72265352.6632653,
            "unit": "ns",
            "range": "± 8506743.132033773"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 153868678.1736842,
            "unit": "ns",
            "range": "± 20900408.764198773"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 307531849.07608694,
            "unit": "ns",
            "range": "± 34463935.21199322"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 56757.52808988764,
            "unit": "ns",
            "range": "± 14358.14719236077"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 270896.7708333333,
            "unit": "ns",
            "range": "± 17859.259278845668"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 291563.78651685396,
            "unit": "ns",
            "range": "± 26188.636565690398"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 253390.33333333334,
            "unit": "ns",
            "range": "± 41777.84001941362"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4296304.04040404,
            "unit": "ns",
            "range": "± 354367.96760334435"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3906910.935483871,
            "unit": "ns",
            "range": "± 333888.8070299884"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22269.215789473685,
            "unit": "ns",
            "range": "± 3172.494413130429"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 74508.51515151515,
            "unit": "ns",
            "range": "± 19251.304212571475"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 82964.43333333333,
            "unit": "ns",
            "range": "± 13943.366558686164"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 87693.74489795919,
            "unit": "ns",
            "range": "± 21217.37505617644"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7486.936170212766,
            "unit": "ns",
            "range": "± 1265.0115797719868"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16824,
            "unit": "ns",
            "range": "± 5593.229863515574"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1300404.705882353,
            "unit": "ns",
            "range": "± 132218.88258470566"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2628379.057471264,
            "unit": "ns",
            "range": "± 313773.15642838465"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1652713.8936170214,
            "unit": "ns",
            "range": "± 146759.5603940624"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7797383.935483871,
            "unit": "ns",
            "range": "± 1029820.52663832"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3619759.574712644,
            "unit": "ns",
            "range": "± 231436.16535871165"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3643477.6363636362,
            "unit": "ns",
            "range": "± 185044.5316774707"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5061206.107526882,
            "unit": "ns",
            "range": "± 864665.8851878727"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4498258.466666667,
            "unit": "ns",
            "range": "± 509065.46151313145"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 15374993.614583334,
            "unit": "ns",
            "range": "± 2358857.597421"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4936722.768031881,
            "unit": "ns",
            "range": "± 492500.2023443571"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1700970.1433971773,
            "unit": "ns",
            "range": "± 221993.46099600082"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 962501.3653879915,
            "unit": "ns",
            "range": "± 71722.44952209946"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2544121.52890625,
            "unit": "ns",
            "range": "± 66952.25657206927"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 775537.3824904421,
            "unit": "ns",
            "range": "± 87817.38935620121"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 622436.3366543384,
            "unit": "ns",
            "range": "± 55010.637450045724"
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
          "id": "d471c63d12510026101fa9360e81bed713ebb110",
          "message": "Fix TxResult query behavior to rely less on IBlockChainIndex and use fallback",
          "timestamp": "2023-12-07T17:23:39+09:00",
          "tree_id": "7e8ecced66d0c1c611d2db9c3e6ddc10ab9e79cd",
          "url": "https://github.com/greymistcube/libplanet/commit/d471c63d12510026101fa9360e81bed713ebb110"
        },
        "date": 1701938435499,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8963549.882978724,
            "unit": "ns",
            "range": "± 1119358.0921284882"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20696109.84375,
            "unit": "ns",
            "range": "± 636480.7709288636"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49525948.875,
            "unit": "ns",
            "range": "± 955411.0744105823"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 99831234.81578948,
            "unit": "ns",
            "range": "± 2203210.478481927"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 204925431.15,
            "unit": "ns",
            "range": "± 4542602.266923144"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45048.511235955055,
            "unit": "ns",
            "range": "± 9654.76881990353"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 235288.27835051547,
            "unit": "ns",
            "range": "± 17861.311481769673"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 239756.4090909091,
            "unit": "ns",
            "range": "± 23543.172455215303"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 216850.14285714287,
            "unit": "ns",
            "range": "± 20680.019624509623"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4021116.9418604653,
            "unit": "ns",
            "range": "± 286001.86664782057"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3522524.024390244,
            "unit": "ns",
            "range": "± 126285.95483692712"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19065.726315789474,
            "unit": "ns",
            "range": "± 4178.811473200895"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 87471.85106382979,
            "unit": "ns",
            "range": "± 9841.520394285017"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 78146.10606060606,
            "unit": "ns",
            "range": "± 15613.361403055142"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 80051.71111111112,
            "unit": "ns",
            "range": "± 11092.409889269355"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6904.919191919192,
            "unit": "ns",
            "range": "± 1914.8502561838889"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20698.521505376346,
            "unit": "ns",
            "range": "± 3764.952999240364"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1060197.4421052632,
            "unit": "ns",
            "range": "± 83599.12206918583"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2312029.0217391304,
            "unit": "ns",
            "range": "± 129663.77423263704"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1567596.3232323232,
            "unit": "ns",
            "range": "± 121907.99635555115"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6907272.848837209,
            "unit": "ns",
            "range": "± 558791.1604192156"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3016797.475609756,
            "unit": "ns",
            "range": "± 108006.10146387281"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3074581.419354839,
            "unit": "ns",
            "range": "± 91911.19073532312"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3714126.727272727,
            "unit": "ns",
            "range": "± 89054.1524766074"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3537931.275862069,
            "unit": "ns",
            "range": "± 101914.96678390294"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 13618511.35483871,
            "unit": "ns",
            "range": "± 2619454.2962658172"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4680357.868351064,
            "unit": "ns",
            "range": "± 180520.9452349323"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1474247.1374240452,
            "unit": "ns",
            "range": "± 48199.20450261473"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 865921.9049183239,
            "unit": "ns",
            "range": "± 21168.092102977134"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2160971.8627772178,
            "unit": "ns",
            "range": "± 132299.0352124327"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 672581.9627574574,
            "unit": "ns",
            "range": "± 16193.23701922747"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 584721.5223106971,
            "unit": "ns",
            "range": "± 5939.2239488405485"
          }
        ]
      }
    ]
  }
}