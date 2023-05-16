window.BENCHMARK_DATA = {
  "lastUpdate": 1684226731817,
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
          "id": "677c66337b332a9e1966f6d61ca2312d04090702",
          "message": "Removed IActionContext.Rehearsal property",
          "timestamp": "2023-05-16T17:28:31+09:00",
          "tree_id": "9ffcc97be1fa4ee52e06a68f2d8e8fe744d2a162",
          "url": "https://github.com/greymistcube/libplanet/commit/677c66337b332a9e1966f6d61ca2312d04090702"
        },
        "date": 1684226634838,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3397353.1951219514,
            "unit": "ns",
            "range": "± 122479.84218478962"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3611564.111111111,
            "unit": "ns",
            "range": "± 118440.32171442237"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4328554.5,
            "unit": "ns",
            "range": "± 121542.09228737422"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4588401.62,
            "unit": "ns",
            "range": "± 122434.18111320058"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7028073.545454546,
            "unit": "ns",
            "range": "± 169910.65181546146"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 292648.8787878788,
            "unit": "ns",
            "range": "± 8351.296653654957"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 280324.6382978723,
            "unit": "ns",
            "range": "± 10564.943322602623"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 250241.53125,
            "unit": "ns",
            "range": "± 7183.581023526677"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4393670.133333334,
            "unit": "ns",
            "range": "± 68025.627558261"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4013979.2,
            "unit": "ns",
            "range": "± 59416.90096524965"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20557.797872340427,
            "unit": "ns",
            "range": "± 1559.8697807505118"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 89052.1170212766,
            "unit": "ns",
            "range": "± 5364.041957884346"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 81474.73333333334,
            "unit": "ns",
            "range": "± 2386.3643814219863"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 98335.34736842105,
            "unit": "ns",
            "range": "± 14165.356824045046"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6001.113402061856,
            "unit": "ns",
            "range": "± 806.1501084926308"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18666.202127659573,
            "unit": "ns",
            "range": "± 1853.5448373539405"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5991221.003348215,
            "unit": "ns",
            "range": "± 25375.71468386434"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1890764.4122395834,
            "unit": "ns",
            "range": "± 3381.1801264416013"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1370179.8861979167,
            "unit": "ns",
            "range": "± 4291.534302280566"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2604787.4130208334,
            "unit": "ns",
            "range": "± 2998.5927988731273"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 834950.0458984375,
            "unit": "ns",
            "range": "± 533.3291943671493"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 748904.3773716518,
            "unit": "ns",
            "range": "± 560.0473394799301"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8097349.045454546,
            "unit": "ns",
            "range": "± 196475.11999559525"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21623379.266666666,
            "unit": "ns",
            "range": "± 288773.42040887015"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54581994.06666667,
            "unit": "ns",
            "range": "± 404358.2800031015"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 129707368,
            "unit": "ns",
            "range": "± 1239890.4510147546"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 216993278.8,
            "unit": "ns",
            "range": "± 2679535.1181102614"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1454086.157142857,
            "unit": "ns",
            "range": "± 69642.25557195043"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2892522.0322580645,
            "unit": "ns",
            "range": "± 88218.24546184078"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2329890.890625,
            "unit": "ns",
            "range": "± 107756.69288183039"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5768574.340425532,
            "unit": "ns",
            "range": "± 221472.88197108297"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50377.18279569892,
            "unit": "ns",
            "range": "± 2995.0093741097276"
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
          "id": "08bb683f346859d29e325c9dacf39c9f72e3a9b0",
          "message": "Changelog",
          "timestamp": "2023-05-16T17:32:31+09:00",
          "tree_id": "331832bd05821743d2d84e301db65359b1f52599",
          "url": "https://github.com/greymistcube/libplanet/commit/08bb683f346859d29e325c9dacf39c9f72e3a9b0"
        },
        "date": 1684226723978,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3425664.75,
            "unit": "ns",
            "range": "± 95595.42911226147"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3502630.8695652173,
            "unit": "ns",
            "range": "± 84178.28062149584"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4269420.225806451,
            "unit": "ns",
            "range": "± 127128.27466584284"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4329342.096774193,
            "unit": "ns",
            "range": "± 128868.54014106904"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7056565.5,
            "unit": "ns",
            "range": "± 296783.53920741816"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 274975.5142857143,
            "unit": "ns",
            "range": "± 5467.092653382807"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 268250.2380952381,
            "unit": "ns",
            "range": "± 6228.575871776484"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 236208.5625,
            "unit": "ns",
            "range": "± 3378.109095707242"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4244825.733333333,
            "unit": "ns",
            "range": "± 68580.80481703594"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3796981.6666666665,
            "unit": "ns",
            "range": "± 59509.67652847568"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17737.094736842104,
            "unit": "ns",
            "range": "± 1140.6367302975648"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 83119.33333333333,
            "unit": "ns",
            "range": "± 3640.2576490425"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 71865.91304347826,
            "unit": "ns",
            "range": "± 1519.9834303236657"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 88922.54639175258,
            "unit": "ns",
            "range": "± 10970.76455006348"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4790.762886597938,
            "unit": "ns",
            "range": "± 673.3229749594525"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17243.875,
            "unit": "ns",
            "range": "± 1336.508453908325"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5904591.194791666,
            "unit": "ns",
            "range": "± 29643.071915085366"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1856776.4912109375,
            "unit": "ns",
            "range": "± 4259.943681431901"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1354863.06953125,
            "unit": "ns",
            "range": "± 6428.91721464364"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2582112.7973958333,
            "unit": "ns",
            "range": "± 9005.13098800642"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 827048.4932942708,
            "unit": "ns",
            "range": "± 1935.8079757808182"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 751279.0080217634,
            "unit": "ns",
            "range": "± 1259.8069718224308"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7618415.692307692,
            "unit": "ns",
            "range": "± 59532.036100160134"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20969691.64285714,
            "unit": "ns",
            "range": "± 294860.918777652"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52711546.31818182,
            "unit": "ns",
            "range": "± 1285661.543349696"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 104359270.31578948,
            "unit": "ns",
            "range": "± 2295766.0916124624"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 213396633.8125,
            "unit": "ns",
            "range": "± 3857520.837174315"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1390017.5520833333,
            "unit": "ns",
            "range": "± 89545.58241204894"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2640770.023809524,
            "unit": "ns",
            "range": "± 96241.60641196465"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2232920.0975609757,
            "unit": "ns",
            "range": "± 114488.50552618805"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5684180.375,
            "unit": "ns",
            "range": "± 313009.4849105394"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47665.78666666667,
            "unit": "ns",
            "range": "± 2230.8574420717355"
          }
        ]
      }
    ]
  }
}