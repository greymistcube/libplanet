window.BENCHMARK_DATA = {
  "lastUpdate": 1686129793407,
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
          "id": "8e352a36a1df2997198200100b40c956d9435aeb",
          "message": "Prepare 1.4.1",
          "timestamp": "2023-06-07T17:59:47+09:00",
          "tree_id": "00a0c7681d77723219c692049b0c449a1d5aa778",
          "url": "https://github.com/greymistcube/libplanet/commit/8e352a36a1df2997198200100b40c956d9435aeb"
        },
        "date": 1686129764895,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1778378.5714285714,
            "unit": "ns",
            "range": "± 180775.69757866114"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3382305.3191489363,
            "unit": "ns",
            "range": "± 325030.8889761198"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2747727.659574468,
            "unit": "ns",
            "range": "± 241091.64161544276"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7193001.063829787,
            "unit": "ns",
            "range": "± 588532.624778749"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 64161.458333333336,
            "unit": "ns",
            "range": "± 13585.738418547331"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9533701.010101011,
            "unit": "ns",
            "range": "± 781209.7738208702"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25888846.93877551,
            "unit": "ns",
            "range": "± 1028957.5426740651"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 77640711.36363636,
            "unit": "ns",
            "range": "± 2758319.2574730967"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 136077497.05882353,
            "unit": "ns",
            "range": "± 4344066.719692804"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 304174813.6363636,
            "unit": "ns",
            "range": "± 7469371.743727558"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6431456.40625,
            "unit": "ns",
            "range": "± 119876.85056517994"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2090818.5677083333,
            "unit": "ns",
            "range": "± 25283.25938496725"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1557014.0364583333,
            "unit": "ns",
            "range": "± 24076.21454926501"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3414118.984375,
            "unit": "ns",
            "range": "± 46825.96928369329"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1114879.47265625,
            "unit": "ns",
            "range": "± 17436.464736107035"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 1047811.2369791666,
            "unit": "ns",
            "range": "± 14896.806625408515"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4162380.85106383,
            "unit": "ns",
            "range": "± 371066.18001639016"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4145327.3684210526,
            "unit": "ns",
            "range": "± 309559.9053296178"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5694394.252873563,
            "unit": "ns",
            "range": "± 327701.1813663662"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5508645.360824742,
            "unit": "ns",
            "range": "± 379656.22114525596"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9084657.142857144,
            "unit": "ns",
            "range": "± 481736.82767965447"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 353173.62637362635,
            "unit": "ns",
            "range": "± 29054.13275313221"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 324775.2688172043,
            "unit": "ns",
            "range": "± 36888.962812372534"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 297358.2417582418,
            "unit": "ns",
            "range": "± 23886.109705731425"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5532051.612903226,
            "unit": "ns",
            "range": "± 247946.1739194423"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4699580.681818182,
            "unit": "ns",
            "range": "± 276228.60716374347"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26362.371134020617,
            "unit": "ns",
            "range": "± 5970.365317758321"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 124825,
            "unit": "ns",
            "range": "± 15883.661001582312"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 122588.04347826086,
            "unit": "ns",
            "range": "± 22690.961759707465"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 141313.68421052632,
            "unit": "ns",
            "range": "± 22874.289248468907"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9163.333333333334,
            "unit": "ns",
            "range": "± 1285.7429103287616"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24443.010752688173,
            "unit": "ns",
            "range": "± 4458.660303993214"
          }
        ]
      }
    ]
  }
}