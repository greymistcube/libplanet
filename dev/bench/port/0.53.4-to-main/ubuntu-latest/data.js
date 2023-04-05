window.BENCHMARK_DATA = {
  "lastUpdate": 1680664055855,
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
          "id": "f447ded783a1a25394a0bca86199f7e59a4bc226",
          "message": "Merge tag '0.53.4' into port/0.53.4-to-main\n\nLibplanet 0.53.4",
          "timestamp": "2023-04-05T11:50:52+09:00",
          "tree_id": "6c6797cf881deada6e66d7f68eedc5e7c54df135",
          "url": "https://github.com/greymistcube/libplanet/commit/f447ded783a1a25394a0bca86199f7e59a4bc226"
        },
        "date": 1680664046432,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4048189.810810811,
            "unit": "ns",
            "range": "± 135202.69061319213"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4227571.759259259,
            "unit": "ns",
            "range": "± 177773.62396141587"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4980519.116279069,
            "unit": "ns",
            "range": "± 180538.7590693358"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5401563.041666667,
            "unit": "ns",
            "range": "± 209876.09539966908"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9303565.081632653,
            "unit": "ns",
            "range": "± 366230.44110873895"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10783426.361702127,
            "unit": "ns",
            "range": "± 681553.6747346761"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25090930.4,
            "unit": "ns",
            "range": "± 428960.92773131945"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 69271903.26666667,
            "unit": "ns",
            "range": "± 1128270.6881677988"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 137956635.14285713,
            "unit": "ns",
            "range": "± 2169880.095669622"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 275770460,
            "unit": "ns",
            "range": "± 3478058.6517328885"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1665966.9157894736,
            "unit": "ns",
            "range": "± 115870.07063348954"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3322859.1134020616,
            "unit": "ns",
            "range": "± 222334.48928799992"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2687978.6438356163,
            "unit": "ns",
            "range": "± 132418.7848176897"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6955824.03,
            "unit": "ns",
            "range": "± 474515.42745269637"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 57639.78888888889,
            "unit": "ns",
            "range": "± 3936.9108476503584"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6860735.890625,
            "unit": "ns",
            "range": "± 63198.577479297186"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2192357.755729167,
            "unit": "ns",
            "range": "± 17504.606223856146"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1619413.7013020834,
            "unit": "ns",
            "range": "± 12713.83703812595"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3095052.2976973685,
            "unit": "ns",
            "range": "± 15268.748244840588"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 980261.8009114583,
            "unit": "ns",
            "range": "± 7085.5096484915875"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 894266.0916666667,
            "unit": "ns",
            "range": "± 6085.719001706552"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 393318.28846153844,
            "unit": "ns",
            "range": "± 16024.79787561684"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 328899.44444444444,
            "unit": "ns",
            "range": "± 12296.261197386113"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 289794.0625,
            "unit": "ns",
            "range": "± 15049.802513817418"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6905036.647058823,
            "unit": "ns",
            "range": "± 140512.60534154097"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4824869.533333333,
            "unit": "ns",
            "range": "± 68092.1981883667"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24302.064516129034,
            "unit": "ns",
            "range": "± 2070.7058910180303"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 105208.70652173914,
            "unit": "ns",
            "range": "± 6503.087685122857"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 98312.09574468085,
            "unit": "ns",
            "range": "± 7872.266623179968"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 225854.70833333334,
            "unit": "ns",
            "range": "± 19950.549396427614"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7701.372340425532,
            "unit": "ns",
            "range": "± 829.1973834570981"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22880.947916666668,
            "unit": "ns",
            "range": "± 2115.3265885451688"
          }
        ]
      }
    ]
  }
}