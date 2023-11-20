window.BENCHMARK_DATA = {
  "lastUpdate": 1700489270887,
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
          "id": "585f4ed3ed66691c663e6e789ea87a50001ec8ea",
          "message": "Prepare 3.6.2",
          "timestamp": "2023-11-20T18:48:09+09:00",
          "tree_id": "1a049c226a0684bcc3f69f0003f0d7a1bb370460",
          "url": "https://github.com/greymistcube/libplanet/commit/585f4ed3ed66691c663e6e789ea87a50001ec8ea"
        },
        "date": 1700474341768,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5982973.5,
            "unit": "ns",
            "range": "± 51854.99164126231"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 15220918.115384616,
            "unit": "ns",
            "range": "± 63441.2786684643"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 38700704.5,
            "unit": "ns",
            "range": "± 195479.71209890998"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 77705062.42307693,
            "unit": "ns",
            "range": "± 452342.96852949634"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 159408170.66666666,
            "unit": "ns",
            "range": "± 616739.4670405934"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 958800.4,
            "unit": "ns",
            "range": "± 75965.07583449401"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1921508.146153846,
            "unit": "ns",
            "range": "± 85059.61130701787"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1402679.952631579,
            "unit": "ns",
            "range": "± 112082.11788682026"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5760252.833333333,
            "unit": "ns",
            "range": "± 357577.84708867443"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2639522.5434782607,
            "unit": "ns",
            "range": "± 101592.48384112467"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2711993.9655172415,
            "unit": "ns",
            "range": "± 117084.59786556425"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3243790.033333333,
            "unit": "ns",
            "range": "± 66348.93983275004"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3272104.7454545456,
            "unit": "ns",
            "range": "± 137782.71755775713"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6794749.2,
            "unit": "ns",
            "range": "± 158116.71811908443"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 42536.36170212766,
            "unit": "ns",
            "range": "± 6096.103267708031"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3673123.7885416667,
            "unit": "ns",
            "range": "± 64635.05695917936"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1162140.9417067308,
            "unit": "ns",
            "range": "± 2944.6621554376106"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 729125.8141043527,
            "unit": "ns",
            "range": "± 1068.396267376252"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1942778.85625,
            "unit": "ns",
            "range": "± 12867.716100462389"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 625644.5793457031,
            "unit": "ns",
            "range": "± 3109.113695867498"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 577757.693359375,
            "unit": "ns",
            "range": "± 10503.66737266331"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 249451.77659574468,
            "unit": "ns",
            "range": "± 9609.080881039215"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 238823.73711340205,
            "unit": "ns",
            "range": "± 23059.59049206949"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 170241.26315789475,
            "unit": "ns",
            "range": "± 3751.0344179543813"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3195547.6428571427,
            "unit": "ns",
            "range": "± 38372.78504077746"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2894187.8666666667,
            "unit": "ns",
            "range": "± 34005.68016180042"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21822.505154639177,
            "unit": "ns",
            "range": "± 4697.431869569157"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 84792.22448979592,
            "unit": "ns",
            "range": "± 18230.71267927959"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 93212.03488372093,
            "unit": "ns",
            "range": "± 2959.5464529362407"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 94431.11340206186,
            "unit": "ns",
            "range": "± 13664.939402442395"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3849.670588235294,
            "unit": "ns",
            "range": "± 535.8146531936494"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14207.376288659794,
            "unit": "ns",
            "range": "± 1998.3751746613418"
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
          "distinct": true,
          "id": "1a27f4c51533ea4fb42c312f89fa912ad45c8a5d",
          "message": "Merge pull request #3502 from greymistcube/revert/prepare/3.6.1\n\n⏪ Revert \"Prepare 3.6.2\"",
          "timestamp": "2023-11-20T21:07:48+09:00",
          "tree_id": "05387f165cf02d173e9e04590549dee77618644e",
          "url": "https://github.com/greymistcube/libplanet/commit/1a27f4c51533ea4fb42c312f89fa912ad45c8a5d"
        },
        "date": 1700489223710,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 199799.82857142857,
            "unit": "ns",
            "range": "± 9153.532730506142"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 192303.95081967214,
            "unit": "ns",
            "range": "± 8330.073537943166"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 162995.82142857142,
            "unit": "ns",
            "range": "± 4645.29143568913"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3081440.6428571427,
            "unit": "ns",
            "range": "± 43491.385578255424"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2822546.5714285714,
            "unit": "ns",
            "range": "± 47998.5920301744"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16057.15625,
            "unit": "ns",
            "range": "± 2727.699980909789"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59139.818181818184,
            "unit": "ns",
            "range": "± 4623.372338743023"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 60609.80808080808,
            "unit": "ns",
            "range": "± 11246.685424347022"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 58135.515789473684,
            "unit": "ns",
            "range": "± 8880.05785258033"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2976.6170212765956,
            "unit": "ns",
            "range": "± 565.6278433091105"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14347.041666666666,
            "unit": "ns",
            "range": "± 2392.5186065015537"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3658083.4639423075,
            "unit": "ns",
            "range": "± 28574.94728548058"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1281120.359654018,
            "unit": "ns",
            "range": "± 3133.8647738112563"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 728438.7328725961,
            "unit": "ns",
            "range": "± 1182.0911661327098"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1938119.5444010417,
            "unit": "ns",
            "range": "± 3160.424669214346"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 616135.0970982143,
            "unit": "ns",
            "range": "± 957.3986103048476"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 562765.1391601562,
            "unit": "ns",
            "range": "± 892.6167514181121"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 38045.29787234042,
            "unit": "ns",
            "range": "± 5085.81342196174"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2420266.0714285714,
            "unit": "ns",
            "range": "± 18560.50666775388"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2497828.5901639345,
            "unit": "ns",
            "range": "± 91790.00687772372"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3118867.5714285714,
            "unit": "ns",
            "range": "± 70496.45678796306"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2963155.4693877553,
            "unit": "ns",
            "range": "± 114787.7635882309"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6814037.755319149,
            "unit": "ns",
            "range": "± 263545.17799812584"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5654263.6875,
            "unit": "ns",
            "range": "± 24099.7139173027"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14539462.066666666,
            "unit": "ns",
            "range": "± 80770.56694601662"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36728943.928571425,
            "unit": "ns",
            "range": "± 253016.32728274347"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 76156005.75,
            "unit": "ns",
            "range": "± 193173.3622771972"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 151600404.7142857,
            "unit": "ns",
            "range": "± 829181.5656129685"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1006170.3631578947,
            "unit": "ns",
            "range": "± 118059.8942539211"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1988454.027027027,
            "unit": "ns",
            "range": "± 65830.47035440794"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1439822.5051546392,
            "unit": "ns",
            "range": "± 138790.2606475958"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5733792.209302326,
            "unit": "ns",
            "range": "± 310720.24849527824"
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
          "id": "68fb469d52639418c8785c2512f1e18452defbab",
          "message": "Prepare 3.6.2",
          "timestamp": "2023-11-20T22:56:39+09:00",
          "tree_id": "69a7248c31c7f108ea18b3dde4f848df24bca099",
          "url": "https://github.com/greymistcube/libplanet/commit/68fb469d52639418c8785c2512f1e18452defbab"
        },
        "date": 1700489263762,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 199799.5892857143,
            "unit": "ns",
            "range": "± 8564.129840162153"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 197619.66666666666,
            "unit": "ns",
            "range": "± 8329.049466289942"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 167065.4,
            "unit": "ns",
            "range": "± 4405.8057435615565"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3215297.8571428573,
            "unit": "ns",
            "range": "± 29120.036614667235"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2929309.2666666666,
            "unit": "ns",
            "range": "± 39027.225250854724"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13951.09090909091,
            "unit": "ns",
            "range": "± 2609.3617684387846"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 69656.85416666667,
            "unit": "ns",
            "range": "± 7371.458136094445"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 61000.489130434784,
            "unit": "ns",
            "range": "± 4488.005446742512"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 65327.969696969696,
            "unit": "ns",
            "range": "± 16144.850977661858"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4552.547368421053,
            "unit": "ns",
            "range": "± 1320.1250163914688"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17258.46153846154,
            "unit": "ns",
            "range": "± 1829.2873069264028"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3620112.2076822915,
            "unit": "ns",
            "range": "± 5393.587123749702"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1150800.1089242788,
            "unit": "ns",
            "range": "± 3804.5574422323443"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 744465.1630108173,
            "unit": "ns",
            "range": "± 6569.765498032078"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1943035.457782452,
            "unit": "ns",
            "range": "± 10550.918526915335"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 617015.7731370192,
            "unit": "ns",
            "range": "± 2373.5820090853344"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 575849.476422991,
            "unit": "ns",
            "range": "± 8453.73099925145"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 40468.04210526316,
            "unit": "ns",
            "range": "± 5208.692062140772"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2488840.477272727,
            "unit": "ns",
            "range": "± 91445.1498294199"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2502007.077777778,
            "unit": "ns",
            "range": "± 94470.25134099789"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3123541.9285714286,
            "unit": "ns",
            "range": "± 49959.722572233186"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3063308.2,
            "unit": "ns",
            "range": "± 123241.87163878439"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6787466.244444445,
            "unit": "ns",
            "range": "± 255423.5661085288"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5774745,
            "unit": "ns",
            "range": "± 128316.18494501038"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14762652.73076923,
            "unit": "ns",
            "range": "± 123515.92707903021"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37472143.26923077,
            "unit": "ns",
            "range": "± 188628.70352810124"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 77728923.85714285,
            "unit": "ns",
            "range": "± 537709.9200748138"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 154267514.64285713,
            "unit": "ns",
            "range": "± 547248.0001859103"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 956550.9042553192,
            "unit": "ns",
            "range": "± 71844.62169723418"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1901096.2325581396,
            "unit": "ns",
            "range": "± 102770.38771446068"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1454606.7741935484,
            "unit": "ns",
            "range": "± 103509.11708984962"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5701159.422535211,
            "unit": "ns",
            "range": "± 273453.69840832346"
          }
        ]
      }
    ]
  }
}