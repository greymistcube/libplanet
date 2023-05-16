window.BENCHMARK_DATA = {
  "lastUpdate": 1684228572200,
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
          "id": "08a655440560c84133dc3ab77232015512ec2f44",
          "message": "Prepare 1.2.1",
          "timestamp": "2023-05-16T17:59:22+09:00",
          "tree_id": "42e66b107c4b4ca1ce58e4c972c15d296fb64218",
          "url": "https://github.com/greymistcube/libplanet/commit/08a655440560c84133dc3ab77232015512ec2f44"
        },
        "date": 1684228549535,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7611668.95,
            "unit": "ns",
            "range": "± 395121.71749836556"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19260699.423076924,
            "unit": "ns",
            "range": "± 781652.6597650257"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48754553.03030303,
            "unit": "ns",
            "range": "± 2268998.4548738627"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 95559422.41304348,
            "unit": "ns",
            "range": "± 2359325.105859029"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 194487301.57142857,
            "unit": "ns",
            "range": "± 3088662.892654148"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 59618.9375,
            "unit": "ns",
            "range": "± 8073.0519550995605"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 313006.75268817204,
            "unit": "ns",
            "range": "± 18745.80483772994"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 312169.0789473684,
            "unit": "ns",
            "range": "± 26444.375877783717"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 296853.1195652174,
            "unit": "ns",
            "range": "± 22722.03414843596"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4551757.8,
            "unit": "ns",
            "range": "± 520009.2837574828"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3667210.3846153845,
            "unit": "ns",
            "range": "± 55195.61450202734"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24971.115789473683,
            "unit": "ns",
            "range": "± 3382.462922578809"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 116673.46315789473,
            "unit": "ns",
            "range": "± 11991.46195442738"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 112025.88421052632,
            "unit": "ns",
            "range": "± 12710.190647467123"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 118920.43010752689,
            "unit": "ns",
            "range": "± 15412.980266784914"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7906.541666666667,
            "unit": "ns",
            "range": "± 1383.49799167995"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19371.35714285714,
            "unit": "ns",
            "range": "± 3861.0984101664244"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1477269.388888889,
            "unit": "ns",
            "range": "± 137996.8731729047"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2859775.304347826,
            "unit": "ns",
            "range": "± 260690.42512105516"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2493888.8263157895,
            "unit": "ns",
            "range": "± 244664.51790648693"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6700848.944444444,
            "unit": "ns",
            "range": "± 519241.5909816491"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3106140.5,
            "unit": "ns",
            "range": "± 66288.30687432516"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3256594.396226415,
            "unit": "ns",
            "range": "± 133881.53830623484"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4225413.752873563,
            "unit": "ns",
            "range": "± 248622.48743820132"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4402557.212765957,
            "unit": "ns",
            "range": "± 431783.6824382218"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7570651.942857143,
            "unit": "ns",
            "range": "± 355366.0282375076"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6994279.026747881,
            "unit": "ns",
            "range": "± 304669.956693046"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1961532.2421875,
            "unit": "ns",
            "range": "± 41112.89647766064"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1385132.6881734913,
            "unit": "ns",
            "range": "± 40116.775186263316"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2664440.1591145834,
            "unit": "ns",
            "range": "± 38941.63552782159"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 780739.5366908482,
            "unit": "ns",
            "range": "± 7328.873540063218"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 844506.9533641582,
            "unit": "ns",
            "range": "± 50244.04178989513"
          }
        ]
      }
    ]
  }
}