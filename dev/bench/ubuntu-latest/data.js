window.BENCHMARK_DATA = {
  "lastUpdate": 1678121811978,
  "repoUrl": "https://github.com/greymistcube/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "hong@minhee.org",
            "name": "Hong Minhee (洪 民憙)",
            "username": "dahlia"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fa15924beb36a7ebe3d92052f5c20af2a235916c",
          "message": "Merge pull request #2788 from dahlia/0.48-maintenance",
          "timestamp": "2023-02-06T19:09:15+09:00",
          "tree_id": "756adedd8cd6f72fe1983dfa077c437153ef7b89",
          "url": "https://github.com/greymistcube/libplanet/commit/fa15924beb36a7ebe3d92052f5c20af2a235916c"
        },
        "date": 1675700391353,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 107768.88235294117,
            "unit": "ns",
            "range": "± 3480.3009950351684"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5959970.296875,
            "unit": "ns",
            "range": "± 14215.72691146242"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1837217.6932198661,
            "unit": "ns",
            "range": "± 1861.110448680044"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1383556.2957589286,
            "unit": "ns",
            "range": "± 1554.915061455815"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2559303.8116629464,
            "unit": "ns",
            "range": "± 1704.916640691578"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 815601.7464425223,
            "unit": "ns",
            "range": "± 1256.355019048888"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 747827.5211356027,
            "unit": "ns",
            "range": "± 1119.8971424537865"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 90977.04166666667,
            "unit": "ns",
            "range": "± 7832.084146793633"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 203702.28125,
            "unit": "ns",
            "range": "± 9400.036991600213"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 196123.61904761905,
            "unit": "ns",
            "range": "± 7139.780310046374"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3813901.8666666667,
            "unit": "ns",
            "range": "± 25312.3166628046"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9621084.933333334,
            "unit": "ns",
            "range": "± 71194.0582236494"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19219.771739130436,
            "unit": "ns",
            "range": "± 1923.8630271733002"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 56042.857142857145,
            "unit": "ns",
            "range": "± 6176.488041258521"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 47402.583333333336,
            "unit": "ns",
            "range": "± 2984.8755723574372"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 99302.10309278351,
            "unit": "ns",
            "range": "± 16676.920957871524"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5819.438775510204,
            "unit": "ns",
            "range": "± 727.5079206190358"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19292.325842696628,
            "unit": "ns",
            "range": "± 1831.0558787913558"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4477109.720052083,
            "unit": "ns",
            "range": "± 50909.209504483595"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6149963.6,
            "unit": "ns",
            "range": "± 70634.45903058122"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 25478003.533333335,
            "unit": "ns",
            "range": "± 208029.8914146257"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6810488.428571428,
            "unit": "ns",
            "range": "± 76449.13909835166"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 29378384.5,
            "unit": "ns",
            "range": "± 266425.4125179243"
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "d3bae116896d64908c86e567a069fbb85daae677",
          "message": "Merge pull request #2888 from greymistcube/port/0.50.1-to-main\n\n🔀 Port 0.50.1 to main",
          "timestamp": "2023-03-06T05:42:17-05:00",
          "tree_id": "a8dd616ebe8ec9898d172cc4ff3b65e747c211da",
          "url": "https://github.com/greymistcube/libplanet/commit/d3bae116896d64908c86e567a069fbb85daae677"
        },
        "date": 1678121804839,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5825360.3125,
            "unit": "ns",
            "range": "± 18794.71791805863"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1856404.59375,
            "unit": "ns",
            "range": "± 6540.484894397997"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1348260.675390625,
            "unit": "ns",
            "range": "± 5309.441942717509"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2622177.2950721155,
            "unit": "ns",
            "range": "± 3792.2541916355626"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 827479.5555245535,
            "unit": "ns",
            "range": "± 849.2722992259595"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 758989.0964192708,
            "unit": "ns",
            "range": "± 8415.675772496517"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 7923732.066666666,
            "unit": "ns",
            "range": "± 119385.94199454058"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 21812805,
            "unit": "ns",
            "range": "± 407244.06755426514"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 53636421.4,
            "unit": "ns",
            "range": "± 699300.1075616146"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 106995460.13333334,
            "unit": "ns",
            "range": "± 1801512.7939542867"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 212163954.66666666,
            "unit": "ns",
            "range": "± 2605616.4514955455"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 205084.30303030304,
            "unit": "ns",
            "range": "± 6305.50920071512"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 204535.51162790696,
            "unit": "ns",
            "range": "± 7457.929229931797"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 183007.52040816325,
            "unit": "ns",
            "range": "± 12529.545311625401"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 11782128.538461538,
            "unit": "ns",
            "range": "± 158065.7858928867"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9508077,
            "unit": "ns",
            "range": "± 181241.01024179562"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21261.548387096773,
            "unit": "ns",
            "range": "± 2071.843122503167"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60749.24742268041,
            "unit": "ns",
            "range": "± 6485.417313466497"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 39959.17647058824,
            "unit": "ns",
            "range": "± 806.0348344902748"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 96393.56666666667,
            "unit": "ns",
            "range": "± 10719.458762382872"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6456.34375,
            "unit": "ns",
            "range": "± 785.399969551217"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19350.74226804124,
            "unit": "ns",
            "range": "± 1707.1042384104633"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49279.364705882355,
            "unit": "ns",
            "range": "± 2615.7354690368807"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1443396.3626373627,
            "unit": "ns",
            "range": "± 100875.93399788083"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2651074.3103448274,
            "unit": "ns",
            "range": "± 70937.64176479401"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2340524.125,
            "unit": "ns",
            "range": "± 120237.23381687365"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5648966.865671642,
            "unit": "ns",
            "range": "± 268430.83048586315"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3393356.9166666665,
            "unit": "ns",
            "range": "± 38652.03036995207"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5273393,
            "unit": "ns",
            "range": "± 90505.05793685702"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 24554084.8,
            "unit": "ns",
            "range": "± 378148.4588127487"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6443561.642857143,
            "unit": "ns",
            "range": "± 275644.0750610652"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 28446332.210526317,
            "unit": "ns",
            "range": "± 609369.7621633882"
          }
        ]
      }
    ]
  }
}