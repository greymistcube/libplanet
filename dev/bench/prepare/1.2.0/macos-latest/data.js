window.BENCHMARK_DATA = {
  "lastUpdate": 1683611919980,
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
          "id": "7e215976c22135f841b0c847f070f41df932dda6",
          "message": "Prepare 1.2.0",
          "timestamp": "2023-05-09T14:40:28+09:00",
          "tree_id": "6e83753f227a51959e4e13e4c26d550555ed1a33",
          "url": "https://github.com/greymistcube/libplanet/commit/7e215976c22135f841b0c847f070f41df932dda6"
        },
        "date": 1683611898006,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8698289.387096774,
            "unit": "ns",
            "range": "± 582514.7776096968"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22242829.477272727,
            "unit": "ns",
            "range": "± 1881828.6535810127"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53804844.07692308,
            "unit": "ns",
            "range": "± 2102950.808235473"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 109800381.39090909,
            "unit": "ns",
            "range": "± 4617042.431575364"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 227857025.31666666,
            "unit": "ns",
            "range": "± 10128651.196371233"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 74139.43548387097,
            "unit": "ns",
            "range": "± 12403.204785550955"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 335476.8085106383,
            "unit": "ns",
            "range": "± 25982.021242686467"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 315928.375,
            "unit": "ns",
            "range": "± 27513.988185246697"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 310440.8494623656,
            "unit": "ns",
            "range": "± 28345.592246470682"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4080634.9850746267,
            "unit": "ns",
            "range": "± 192891.564096491"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3817475,
            "unit": "ns",
            "range": "± 109483.06555027455"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22642.864583333332,
            "unit": "ns",
            "range": "± 3961.4624057279184"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 107256.94845360825,
            "unit": "ns",
            "range": "± 14219.233596443655"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 109551.25,
            "unit": "ns",
            "range": "± 12679.049367486425"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 112141.98913043478,
            "unit": "ns",
            "range": "± 11270.57820264154"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6410.21875,
            "unit": "ns",
            "range": "± 1180.5634890359504"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19934.244897959183,
            "unit": "ns",
            "range": "± 4265.277641852532"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1526974.588888889,
            "unit": "ns",
            "range": "± 109658.02595624828"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2927224.320754717,
            "unit": "ns",
            "range": "± 119979.82290332974"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2505711.9,
            "unit": "ns",
            "range": "± 239251.61534657332"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6075828.5,
            "unit": "ns",
            "range": "± 154394.17967397606"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3421497.5268817204,
            "unit": "ns",
            "range": "± 200743.75097467526"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3557209.3535353537,
            "unit": "ns",
            "range": "± 278634.58144744736"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4646082.370786517,
            "unit": "ns",
            "range": "± 324387.54130624875"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4956489.291666667,
            "unit": "ns",
            "range": "± 747843.0928485062"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7631473.642857143,
            "unit": "ns",
            "range": "± 265323.5484772821"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6457753.799479167,
            "unit": "ns",
            "range": "± 109050.682715011"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2034077.9449084052,
            "unit": "ns",
            "range": "± 85413.07335113845"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1329260.002232143,
            "unit": "ns",
            "range": "± 20884.860878101474"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2735805.815204327,
            "unit": "ns",
            "range": "± 74096.46707028575"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 864196.9162946428,
            "unit": "ns",
            "range": "± 10836.890955835632"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 837985.8969726562,
            "unit": "ns",
            "range": "± 7992.229397276446"
          }
        ]
      }
    ]
  }
}